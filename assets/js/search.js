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
      // Add wildcard for partial matching (e.g., "Aard" matches "Aardappel")
      var wildcardQuery = query.trim() + '*';
      var results = searchIndex.search(wildcardQuery);
      if (results.length > 0) {
        searchModal.classList.add('search-modal--has-results');
      } else {
        searchModal.classList.remove('search-modal--has-results');
      }
      displayResults(results);
    } catch (e) {
      searchResults.innerHTML = '';
      selectedIndex = -1;
      searchModal.classList.remove('search-modal--has-results');
    }
  }

  // Display search results
  function displayResults(results) {
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
        var categoryBadge = doc.categories && doc.categories.length
          ? '<span class="search-result__category">' + doc.categories[0] + '</span>'
          : '';

        var tagsHtml = '';
        if (doc.tags && doc.tags.length) {
          tagsHtml = doc.tags.slice(0, 3).map(function(tag) {
            return '<span class="search-result__tag">' + tag + '</span>';
          }).join('');
        }

        var teaserHtml = '';
        if (doc.teaser) {
          var teaserUrl = doc.teaser.indexOf('://') !== -1 ? doc.teaser : '{{ "/" | absolute_url }}' + doc.teaser.replace(/^\//, '');
          teaserHtml = '<img src="' + teaserUrl + '" alt="" class="search-result__thumbnail">';
        }

        html += '<li class="search-result__item" data-index="' + index + '">';
        html += '<a href="' + doc.url + '" class="search-result__link">';
        html += '<div class="search-result__content">';
        html += '<h3 class="search-result__title">' + (doc.title || 'Untitled') + '</h3>';
        html += '<div class="search-result__meta">' + categoryBadge + tagsHtml + '</div>';
        html += '<p class="search-result__excerpt">' + (doc.excerpt || '') + '</p>';
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