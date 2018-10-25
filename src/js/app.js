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

});
