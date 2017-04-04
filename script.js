$(document).ready(function() {
  var height = $(document).height();
  var backgroundH = height+(Math.floor(Math.random() * 10))
  var width = $(document).width();
  var half = width / 2;

  $(document.body).css("width", width);
  $(document.body).css("height", height);
  $(document.body).css("background", "url(http://unsplash.it/" + width + "/" + backgroundH + ")");
  $(document.body).css("background-size", "cover");
  $(document.body).css("background-repeat", "no-repeat");
  $(document.body).css("background-attachment", "fixed");

  if((Math.floor(Math.random() * 20)) === 1){
    $("#quote").html("do nothing<br>regret everything");
  };

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