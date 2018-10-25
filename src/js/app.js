// example of simple includes for js
//=include lib/sayHello.js
$(function() {

	$(".reviews-slider").slick({
		arrows: false,
		dots: true,
		infinite: true
	})

	$(".reviews-slider__button").click(function (e) {
			var block = $(this).parents(".reviews-slider__content");
			block.toggleClass("reviews-slider__active").siblings().removeClass("reviews-slider__active");
	});

	$(".reviews-slick__prev").on("click", function () {
        $('.reviews-slider').slick("slickPrev");
        $(".reviews-slider__active").removeClass("reviews-slider__active");
    });
  $(".reviews-slick__next").on("click", function () {
      $('.reviews-slider').slick("slickNext");
      $(".reviews-slider__active").removeClass("reviews-slider__active")
  });


});
