// Native HTML range slider for timeline filtering
// Replaces ion.RangeSlider (saves ~84KB)

(function() {
  var items = {
    "software": $(".timeline > li.software"),
    "hardware": $(".timeline > li.hardware"),
    "all": $(".timeline > li")
  };

  function showTimeline(scope) {
    $(".timeline li:not('." + scope + "')").hide("slow", function() {
      $(this).detach();
    }).promise().done(function() {
      $(".timeline li").detach();
      $(".timeline").append(items[scope]);
      $(".timeline li:hidden").show("slow");
    });
  }

  function updateSlider(value) {
    var $slider = $("#inputRange");
    var $icon = $(".slider-thumb-icon");

    // Remove all state classes
    $slider.removeClass("slider-software slider-all slider-hardware");
    $icon.removeClass("fa-code fa-heart-o fa-wrench");

    // Set new state class, icon, and filter timeline
    if (value == 0) {
      $slider.addClass("slider-software");
      $icon.addClass("fa-code");
      showTimeline("software");
    } else if (value == 1) {
      $slider.addClass("slider-all");
      $icon.addClass("fa-heart-o");
      showTimeline("all");
    } else if (value == 2) {
      $slider.addClass("slider-hardware");
      $icon.addClass("fa-wrench");
      showTimeline("hardware");
    }
  }

  $(function() {
    var $inputRange = $("#inputRange");

    // Initialize with default value (1 = all)
    $inputRange.val(1);
    updateSlider(1);

    // Handle change events
    $inputRange.on("input change", function() {
      updateSlider(parseInt($(this).val()));
    });
  });
})();