/* >>>>>>>>>>>>>>>>>>>>>>>>><<<<<<<<<<<<<<<<<<<<<<< */
/* >>>>>>>>>>>>>>>>>>>> Korners <<<<<<<<<<<<<<<<<<< */
/* >>>>>>>>>>>>>>>>>>>>>>>>><<<<<<<<<<<<<<<<<<<<<<< */

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

var demoTrigger = document.querySelector(".main-image");
var paneContainer = document.querySelector("._productDetails");

new Drift(demoTrigger, {
  paneContainer: paneContainer,
  inlinePane: false,
});

$(".gallery").slick({
  infinite: true,
  slidesToShow: 3,
  arrows: false,
  centerPadding: "10px",
  slidesToScroll: 3,
  dots: true,
});
