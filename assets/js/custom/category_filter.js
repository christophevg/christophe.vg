(function() {
  var pages = $(".grid__item");
  $("#grid__filter").keyup(function(event) {
    var query = event.target.value.toLowerCase(), veggie_only = false;
    if( query.includes("veggie") ) {
      veggie_only = true;
      query = query.replace("veggie", "").replace("  ", " ").trim();
    }
    pages.detach();
    $(".grid__wrapper").append(pages.filter(function(idx, page) {
      var page_matches_query = $(page).find("a").text().toLowerCase().includes(query) || query.length < 2,
          page_is_veggie     = $(page).find("div.green").text().includes("Veggie");
      if(veggie_only) {
        return page_matches_query && page_is_veggie;
      } else {
        return page_matches_query;
      }
    }));
  });
})();
