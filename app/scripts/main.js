$(document).ready(() => {

  // document.querySelector(".navbar__menu_mobile").addEventListener("click", function (e) {
  //   e.currentTarget.closest(".navbar").classList.toggle("navbar_opened");
  //   e.currentTarget.closest("body").classList.toggle("overlay");
  // });
  // document.querySelector(".overlay-wrap").addEventListener("click", function (e) {
  //   document.querySelector(".navbar").classList.toggle("navbar_opened");
  //   document.querySelector(".hamburger").classList.remove("hamburger_active");
  //   e.currentTarget.closest("body").classList.remove("overlay");
  // });

  $(".header__btn").click(function () {
    $(this).toggleClass("header__btn_active");
    $(this).closest('body').toggleClass("header__btn_active");
  });

  $("a").click(function (event) {
    const link = event.currentTarget.getAttribute("href");
    if (link.length > 1 && link.indexOf("#") === 0) {
      event.preventDefault();
      const section = document.querySelector(link);
      if (section) {
        $("html, body").animate({
          scrollTop: $(link).offset().top - 90
        }, 500);
        window.location.hash = link;
        return false;
      }
    }
  });


});

$(window).on("load resize scroll", function (e) {
  var sticky = $(".header"),
    scroll = $(window).scrollTop();
  if (scroll >= 1) {
    sticky.addClass("header_fixed");
  } else {
    sticky.removeClass("header_fixed");
  }
});


