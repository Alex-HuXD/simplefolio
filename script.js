$(document).ready(() => {
  $(window).scroll(() => {
    this.scrollY > 20
      ? $(".navbar").addClass("sticky")
      : $(".navbar").removeClass("sticky");

    this.scrollY > 600
      ? $(".scroller").addClass("show")
      : $(".scroller").removeClass("show");
  });

  $(".scroller").click(() => {
    $("html").animate({ scrollTop: 0 });
  });

  // navbar-menu toggle
  $(".menu-btn").click(() => {
    $(".navbar .menu").toggleClass("active");
    $(".menu-btn i").toggleClass("active");
  });

  $(".navbar-menu-item").click(() => {
    $(".navbar .menu").toggleClass("active");
    $(".menu-btn i").toggleClass("active");
  });

  //   typedJS
  let typed = new Typed(".typing", {
    strings: ["Full-stack", "Web", "Developer"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true,
  });
});
