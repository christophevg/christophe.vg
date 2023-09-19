$(function() {
  let $inputRange = $("#inputRange");
  let negativeText = "software";
  let neutralText = "";
  let positiveText = "hardware";
  let negativeIcon = "fa fa-code";
  let neutralIcon = "fa fa-heart-o";
  let positiveIcon = "fa fa fa-wrench";
  let rangeObject = {
    min: $inputRange.attr("min") || 0,
    max: $inputRange.attr("max") || 2,
    from: $inputRange.attr("value") || 1,
    step: $inputRange.attr("step") || 0
  };
  let restyleInputRange = $inputRange => {
    let $text0 = $inputRange.parent().find(".irs-grid-text.js-grid-text-0");
    let $text1 = $inputRange.parent().find(".irs-grid-text.js-grid-text-1");
    let $text2 = $inputRange.parent().find(".irs-grid-text.js-grid-text-2");
    let $text3 = $inputRange.parent().find(".irs-grid-text.js-grid-text-3");
    let $text4 = $inputRange.parent().find(".irs-grid-text.js-grid-text-4");
    $text1.hide().prev().hide();
    $text3.hide().prev().hide();
    $text0.text(negativeText);
    $text0.css("margin-left", -$text0.outerWidth() / 2);
    $text2.text(neutralText);
    $text2.css("margin-left", -$text2.outerWidth() / 2);
    $text4.text(positiveText);
    $text4.css("margin-left", -$text4.outerWidth() / 2);
  };
  let changeIcon = ($inputRange, value) => {
    if (value === 0) {
      $inputRange
        .parent()
        .find(".irs-slider.single")
        .removeClass(positiveIcon)
        .removeClass(neutralIcon)
        .addClass(negativeIcon)
        .css({ background: "#f39900", color: "white" });
      show_timeline("software");
    } else if (value === 1) {
      $inputRange
        .parent()
        .find(".irs-slider.single")
        .removeClass(negativeIcon)
        .removeClass(positiveIcon)
        .addClass(neutralIcon)
        .css({ background: "#46be41", color: "white" });
      show_timeline("all");
    } else if (value === 2) {
      $inputRange
        .parent()
        .find(".irs-slider.single")
        .removeClass(negativeIcon)
        .removeClass(neutralIcon)
        .addClass(positiveIcon)
        .css({ background: "#0092d6", color: "white" });
      show_timeline("hardware");
    }
    $inputRange.parent().find(".irs-slider.single").addClass("glyphicon ");
  };

  const options = Object.assign(
    {
      type: "single",
      grid: true,
      from: rangeObject.value,
      min: rangeObject.min,
      max: rangeObject.max,
      step: rangeObject.step,
      hide_min_max: true,
      hide_from_to: true,
      onStart: function(data) {
        changeIcon($(data.input), parseInt(data.from));
        restyleInputRange($(data.input));
      },
      onChange: function(data) {},
      onUpdate: function(data) {},
      onFinish: function(data) {}
    },
    rangeObject
  );

  $inputRange.ionRangeSlider(options);
  $inputRange.on("change", function(event) {
    var $this = $(this),
      value = parseInt($this.prop("value"));
    changeIcon($inputRange, value);
  });
});

// index items
var items = {
  "software" : $(".timeline > li.software"),
  "hardware" : $(".timeline > li.hardware"),
  "all"      : $(".timeline > li")
};

function show_timeline(scope, button) {
  $(".timeline li:not('." + scope + "')").hide("slow", function(){
    $(this).detach();
  }).promise().done(function(){
    $(".timeline li").detach();
    $(".timeline").append(items[scope]);
    $(".timeline li:hidden").show("slow");
  });
}
