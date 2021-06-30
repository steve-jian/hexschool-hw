$(".top-link").click(function (e) {
  e.preventDefault();
  $(this).siblings(".dropdown").slideToggle();
  $(this).parent().siblings().children(".dropdown").slideUp();
  $(this).toggleClass("active");
  $(this).parent().siblings().children(".top-link").removeClass("active");
});

$(".go-top").click(function (e) {
  e.preventDefault();
  $("html,body").animate({ scrollTop: 0 }, 500);
});

let mySwiper = new Swiper(".swiper-container", {
  // Optional parameters
  direction: "horizontal",
  loop: true,
  autoplay: {
    delay: 3000,
  },
});

lightbox.option({
  resizeDuration: 200,
  wrapAround: true,
});
