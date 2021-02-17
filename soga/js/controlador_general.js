/* window.onscroll = function () {
      if (window.scrollY > 10) {
document.getElementsByClassName('site-header')[0].classList.add("navbar-background")
      } else if (window.scrollY <= 10) {
        document.getElementsByClassName('site-header')[0].classList.remove("navbar-background")
      };
    }; */
    var swiper = new Swiper('.swiper-container', {
      slidesPerView: 3,
      spaceBetween: 30,
      slidesPerGroup: 3,
      loop: true,
      loopFillGroupWithBlank: true,
    
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });
  