(function() {
  var pages = $(".grid__item");
  $("#grid__filter").keyup(function(event) {
    var query = event.target.value.toLowerCase();
    pages.detach();
    $(".grid__wrapper").append(query.length < 2 ? pages : pages.filter(function(idx, page){
      return $(page).find("a").text().toLowerCase().includes(query);
    }));
  });
})();
