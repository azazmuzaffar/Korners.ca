/* >>>>>>>>>>>>>>>>>>>>>>>>><<<<<<<<<<<<<<<<<<<<<<< */
/* >>>>>>>>>>>>>>>>>>>> Korners <<<<<<<<<<<<<<<<<<< */
/* >>>>>>>>>>>>>>>>>>>>>>>>><<<<<<<<<<<<<<<<<<<<<<< */

/* 
 All the Dropdown and item selection made here
*/
$(".dropdown").click(function () {
  $(this).attr("tabindex", 1).focus();
  $(this).toggleClass("active");
  $(this).find(".dropdown-menu").slideToggle(300);
});
$(".dropdown").focusout(function () {
  $(this).removeClass("active");
  $(this).find(".dropdown-menu").slideUp(300);
});
$(".dropdown .dropdown-menu li").click(function () {
  $(this).parents(".dropdown").find("span").text($(this).text());
  $(this).parents(".dropdown").find("input").attr("value", $(this).attr("id"));
});

/* 
 Slick Slider
*/
$(".gallery").slick({
  infinite: true,
  slidesToShow: 3,
  arrows: false,
  centerPadding: "10px",
  slidesToScroll: 3,
  dots: true,
});

/* 
 Make selected image active 
*/
$(".gallery .image img").click(function () {
  var src = $(this).attr("src");
  $(".main-image").attr("src", src);
  $(".main-image").attr("data-zoom", src);
});

/* Zoom option two */
/* 
 Pass Image src to the Zoom option to make it active
*/
var liList = document.getElementById("count").getElementsByTagName("li");
var count = liList.length;

var touchtime = 0;
$(".main-image").on("click", function () {
  if (touchtime == 0) {
    // set first click
    touchtime = new Date().getTime();
  } else {
    // compare first click to this click and see if they occurred within double click threshold
    if (new Date().getTime() - touchtime < 800) {
      $(".product-images ul .active").removeClass("active");
      var src = $(this).attr("src");
      var listItems = $("#count li");
      for (let li of listItems) {
        let imgsrc = $(li).children().children().attr("src");
        if (imgsrc === src) {
          $(li).children().addClass("active");
        }
      }
      $("#active-image").attr("src", src);
      $(".product-gallery").addClass("show");
    } else {
      // not a double click so set as a new first click
      touchtime = new Date().getTime();
    }
  }
});

/* 
 Add active classes to the newly selected images
*/
$(".product-images ul li img").click(function () {
  var src = $(this).attr("src");
  $("#active-image").attr("src", src);
  $(".product-images ul .active").removeClass("active");
  $(this).parent().addClass("active");
});

/* 
 Close the Zoom Option
*/
$(".close").click(function () {
  $(".product-gallery").removeClass("show");
});

/* 
 Zoom Option 1
*/
/* Trigger Zoom option 1 on Desktop and disable on mobile */
var demoTrigger;
if (window.innerWidth > 768) {
  demoTrigger = document.querySelector(".main-image");
} else {
  demoTrigger = document.querySelector("");
}
var paneContainer = document.querySelector("._productDetails");
new Drift(demoTrigger, {
  paneContainer: paneContainer,
  inlinePane: false,
});
