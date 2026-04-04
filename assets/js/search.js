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

          // Custom stopword filter that preserves category names
          // Default lunr stopwords include "about", "makes", etc. which are our categories
          // Default stopwords from lunr (excluding category names that should be searchable)
          var customStopwords = [
            'a','able','across','after','all','almost','also','am','among','an','and',
            'any','are','as','at','be','because','been','but','by','can','cannot',
            'could','dear','did','do','does','either','else','ever','every','for',
            'from','get','got','had','has','have','he','her','hers','him','his',
            'how','however','i','if','in','into','is','it','its','just','least',
            'let','like','likely','may','me','might','most','must','my','neither',
            'no','nor','not','of','off','often','on','only','or','other','our','own',
            'rather','said','say','says','she','should','since','so','some','than',
            'that','the','their','them','then','there','these','they','this','tis',
            'to','too','twas','us','wants','was','we','were','what','when','where',
            'which','while','who','whom','why','will','with','would','yet','you','your'
            // Note: 'about', 'makes' removed from default list as they are category names
          ];
          this.pipeline.remove(lunr.stopWordFilter);
          this.searchPipeline.remove(lunr.stopWordFilter);
          this.pipeline.add(lunr.generateStopWordFilter(customStopwords));
          this.searchPipeline.add(lunr.generateStopWordFilter(customStopwords));

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
    // Clear previous selection state
    var previousItems = searchResults.querySelectorAll('.search-result__item--selected');
    previousItems.forEach(function(item) {
      item.classList.remove('search-result__item--selected');
    });

    if (!query || query.length < 2) {
      searchResults.innerHTML = '';
      selectedIndex = -1;
      searchModal.classList.remove('search-modal--has-results');
      return;
    }

    try {
      // Split into terms and search with wildcard for partial matching
      var terms = query.trim().toLowerCase().split(/\s+/).filter(function(t) { return t.length > 0; });
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
    // Disable hover until mouse moves (prevents phantom highlight at cursor position)
    searchResults.classList.add('search-results--keyboard-nav');
    searchInput.focus();
    loadIndex();
  }

  // Close modal
  function closeModal() {
    searchModal.classList.remove('search-modal--open');
    searchModal.classList.remove('search-modal--has-results');
    searchOverlay.classList.remove('search-overlay--open');
    searchResults.classList.remove('search-results--keyboard-nav');
    document.body.style.overflow = '';
    searchInput.value = '';
    searchResults.innerHTML = '';
    selectedIndex = -1;
  }

  // Event listeners
  document.addEventListener('DOMContentLoaded', function() {
    var searchButtons = document.querySelectorAll('.search-button');

    // Set keyboard shortcut text based on OS
    var isMac = navigator.platform.toUpperCase().indexOf('MAC') >= 0 ||
                navigator.userAgent.toUpperCase().indexOf('MAC') >= 0;
    var shortcutText = isMac ? '⌘K' : 'Ctrl+K';

    searchButtons.forEach(function(btn) {
      btn.addEventListener('click', openModal);
      var shortcut = btn.querySelector('.search-button__shortcut');
      if (shortcut) {
        shortcut.textContent = shortcutText;
      }
    });

    if (searchOverlay) {
      searchOverlay.addEventListener('click', closeModal);
    }

    // Close modal when clicking outside the content area
    if (searchModal) {
      searchModal.addEventListener('click', function(e) {
        // Only close if clicking the modal background, not the content
        if (e.target === searchModal) {
          closeModal();
        }
      });
    }

    // Enable hover after mouse movement and clear any keyboard selection
    // This gives mouse priority over keyboard navigation
    if (searchResults) {
      searchResults.addEventListener('mousemove', function() {
        searchResults.classList.remove('search-results--keyboard-nav');
        // Clear keyboard selection if any
        if (selectedIndex >= 0) {
          var selectedItem = searchResults.querySelector('.search-result__item--selected');
          if (selectedItem) {
            selectedItem.classList.remove('search-result__item--selected');
          }
          selectedIndex = -1;
        }
      });
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
          searchResults.classList.add('search-results--keyboard-nav');
          if (selectedIndex < items.length - 1) {
            selectedIndex++;
            updateSelection();
          }
        } else if (e.key === 'ArrowUp') {
          e.preventDefault();
          searchResults.classList.add('search-results--keyboard-nav');
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