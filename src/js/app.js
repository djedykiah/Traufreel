$(function() {
  function youtubeShowVideo() {
    var i, c, y, v, n;
    v = document.getElementsByClassName("youtube");
    for (n = 0; n < v.length; n++) {
        y = v[n];
        i = document.createElement("img");
        i.setAttribute("src", "http://i.ytimg.com/vi/" + y.id + "/hqdefault.jpg");
        i.setAttribute("class", "thumb");
        c = document.createElement("div");
        c.setAttribute("class", "play");
        y.appendChild(i);
        y.appendChild(c);
        y.onclick = function () {
            var a = document.createElement("iframe");
            a.setAttribute("src", "https://www.youtube.com/embed/" + this.id + "?autoplay=1&autohide=1&border=0&wmode=opaque&enablejsapi=1");
            a.style.width = this.style.width;
            a.style.height = this.style.height;
            a.style.border = this.style.border;
            this.parentNode.replaceChild(a, this)
        }
    } ;

  }
  youtubeShowVideo();

    $('.play-pause').on('click', function() {
    if($(this).closest('.audiojs').hasClass("playing")) {
      $(this).closest(".audio-reviews-item").addClass('active');
    } else {
      $(this).closest(".audio-reviews-item").removeClass('active');
    }
  });

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


$(window).on('load', function() {
  $('.popup__hero').addClass('show');
});
