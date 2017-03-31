$(document).ready(function() {
  var height = $(document).height();
  console.log('window height ' + $(window).height());
    console.log('document height ' + $(document).height());

  var width = $(document).width();
  var half = width / 2;
  console.log('window width ' + $(window).width());
    console.log('document width ' + $(document).width());

  $(document.body).css("width", width);
  $(document.body).css("height", height);
  $(document.body).css("background", "url(http://unsplash.it/" + width + "/" + height + ") cover no-repeat fixed");
  if (width < 1000) {
    $("#arrow-up").css("border-bottom", width + "px solid black");
    $("#arrow-up").css("border-left", half + "px solid transparent");
    $("#arrow-up").css("border-right", half + "px solid transparent");
    $("#arrow-up").css("margin", 0);
    $("#arrow-up").css("top", 100);
        $("#arrow-up").css("left", 20);
    $("#arrow").css("display", "none");
  }
});