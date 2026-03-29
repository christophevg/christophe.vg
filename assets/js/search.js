---
layout: null
---
(function() {
  var searchIndex = null;
  var searchInput = document.getElementById('search-input');
  var searchResults = document.getElementById('search-results');
  var searchModal = document.getElementById('search-modal');
  var searchOverlay = document.querySelector('.search-overlay');
  var selectedIndex = -1;

  // Load search index
  function loadIndex() {
    if (searchIndex) return Promise.resolve(searchIndex);

    return fetch('{{ "/search.json" | absolute_url }}')
      .then(function(response) { return response.json(); })
      .then(function(data) {
        searchIndex = lunr(function() {
          this.ref('url');
          this.field('title', { boost: 10 });
          this.field('excerpt');
          this.field('tags');
          this.field('categories');

          data.forEach(function(doc) {
            this.add(doc);
          }, this);
        });

        // Store documents for result lookup
        searchIndex.documents = data;
        return searchIndex;
      });
  }

  // Perform search
  function performSearch(query) {
    if (!query || query.length < 2) {
      searchResults.innerHTML = '';
      selectedIndex = -1;
      searchModal.classList.remove('search-modal--has-results');
      return;
    }

    try {
      // Split into terms and search with wildcard for partial matching
      var terms = query.trim().split(/\s+/).filter(function(t) { return t.length > 0; });
      var results = searchIndex.query(function(q) {
        terms.forEach(function(term) {
          // Search for exact match (higher boost) and prefix match
          q.term(term, { boost: 10 });
          q.term(term + '*');
        });
      });

      // Filter results to require all terms to match (AND logic)
      results = results.filter(function(result) {
        var doc = searchIndex.documents.find(function(d) { return d.url === result.ref; });
        if (!doc) return false;

        var searchableText = [
          doc.title || '',
          doc.excerpt || '',
          doc.tags || '',
          doc.categories || ''
        ].join(' ').toLowerCase();

        return terms.every(function(term) {
          var termLower = term.toLowerCase();
          // Check if term matches as prefix in any field
          return searchableText.indexOf(termLower) !== -1;
        });
      });
      if (results.length > 0) {
        searchModal.classList.add('search-modal--has-results');
      } else {
        searchModal.classList.remove('search-modal--has-results');
      }
      displayResults(results, query);
    } catch (e) {
      searchResults.innerHTML = '';
      selectedIndex = -1;
      searchModal.classList.remove('search-modal--has-results');
    }
  }

  // Highlight search terms in text
  function highlightTerms(text, query) {
    if (!query || !text) return text;
    // Escape HTML first to prevent XSS
    var escaped = text.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
    // Split query into terms and highlight each
    var terms = query.trim().split(/\s+/).filter(function(t) { return t.length > 0; });
    var result = escaped;
    terms.forEach(function(term) {
      var regex = new RegExp('(' + term.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + ')', 'gi');
      result = result.replace(regex, '<mark class="search-highlight">$1</mark>');
    });
    return result;
  }

  // Display search results
  function displayResults(results, query) {
    if (results.length === 0) {
      searchResults.innerHTML = '<p class="search-no-results">No results found</p>';
      selectedIndex = -1;
      return;
    }

    selectedIndex = -1;
    var html = '<ul class="search-results__list">';
    results.slice(0, 20).forEach(function(result, index) {
      var doc = searchIndex.documents.find(function(d) { return d.url === result.ref; });
      if (doc) {
        var categoryBadge = doc.categoryDisplay && doc.categoryDisplay.length
          ? '<span class="search-result__category">' + highlightTerms(doc.categoryDisplay[0], query) + '</span>'
          : '';

        var tagsHtml = '';
        if (doc.tagsDisplay && doc.tagsDisplay.length) {
          tagsHtml = doc.tagsDisplay.slice(0, 3).map(function(tag) {
            return '<span class="search-result__tag">' + highlightTerms(tag, query) + '</span>';
          }).join('');
        }

        var teaserHtml = '';
        if (doc.teaser) {
          var teaserUrl = doc.teaser.indexOf('://') !== -1 ? doc.teaser : '{{ "/" | absolute_url }}' + doc.teaser.replace(/^\//, '');
          teaserHtml = '<img src="' + teaserUrl + '" alt="' + (doc.title || 'Untitled') + '" class="search-result__thumbnail">';
        }

        html += '<li class="search-result__item" data-index="' + index + '">';
        html += '<a href="' + doc.url + '" class="search-result__link">';
        html += '<div class="search-result__content">';
        html += '<h3 class="search-result__title">' + highlightTerms(doc.title || 'Untitled', query) + '</h3>';
        html += '<div class="search-result__meta">' + categoryBadge + tagsHtml + '</div>';
        html += '<p class="search-result__excerpt">' + highlightTerms(doc.excerpt || '', query) + '</p>';
        html += '</div>';
        if (teaserHtml) {
          html += teaserHtml;
        }
        html += '</a>';
        html += '</li>';
      }
    });
    html += '</ul>';

    searchResults.innerHTML = html;
  }

  // Update selected result highlight
  function updateSelection() {
    var items = searchResults.querySelectorAll('.search-result__item');
    items.forEach(function(item, index) {
      if (index === selectedIndex) {
        item.classList.add('search-result__item--selected');
        // Scroll selected item into view
        item.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
      } else {
        item.classList.remove('search-result__item--selected');
      }
    });
  }

  // Navigate to selected result
  function navigateToSelected() {
    var items = searchResults.querySelectorAll('.search-result__item');
    if (selectedIndex >= 0 && selectedIndex < items.length) {
      var link = items[selectedIndex].querySelector('a');
      if (link) {
        window.location.href = link.getAttribute('href');
      }
    }
  }

  // Open modal
  function openModal() {
    searchModal.classList.add('search-modal--open');
    searchOverlay.classList.add('search-overlay--open');
    document.body.style.overflow = 'hidden';
    searchInput.focus();
    loadIndex();
  }

  // Close modal
  function closeModal() {
    searchModal.classList.remove('search-modal--open');
    searchModal.classList.remove('search-modal--has-results');
    searchOverlay.classList.remove('search-overlay--open');
    document.body.style.overflow = '';
    searchInput.value = '';
    searchResults.innerHTML = '';
    selectedIndex = -1;
  }

  // Event listeners
  document.addEventListener('DOMContentLoaded', function() {
    var searchButtons = document.querySelectorAll('.search-button');
    searchButtons.forEach(function(btn) {
      btn.addEventListener('click', openModal);
    });

    if (searchOverlay) {
      searchOverlay.addEventListener('click', closeModal);
    }

    if (searchInput) {
      var debounceTimer;
      searchInput.addEventListener('input', function(e) {
        clearTimeout(debounceTimer);
        debounceTimer = setTimeout(function() {
          performSearch(e.target.value);
        }, 200);
      });

      // Keyboard navigation within results
      searchInput.addEventListener('keydown', function(e) {
        var items = searchResults.querySelectorAll('.search-result__item');

        if (e.key === 'ArrowDown') {
          e.preventDefault();
          if (selectedIndex < items.length - 1) {
            selectedIndex++;
            updateSelection();
          }
        } else if (e.key === 'ArrowUp') {
          e.preventDefault();
          if (selectedIndex > 0) {
            selectedIndex--;
            updateSelection();
          }
        } else if (e.key === 'Enter') {
          e.preventDefault();
          navigateToSelected();
        }
      });
    }

    // Keyboard shortcuts
    document.addEventListener('keydown', function(e) {
      // Cmd/Ctrl + K to open
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        openModal();
      }
      // Escape to close
      if (e.key === 'Escape' && searchModal.classList.contains('search-modal--open')) {
        closeModal();
      }
    });
  });
})();