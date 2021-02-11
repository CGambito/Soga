window.onscroll = function () {
      if (window.scrollY > 10) {
document.getElementsByClassName('site-header')[0].classList.add("navbar-background")
      } else if (window.scrollY <= 10) {
        document.getElementsByClassName('site-header')[0].classList.remove("navbar-background")
      };
    };
    	var swiper = new Swiper('.swiper-container', {

     
      loop: true,
      speed:20000,
       autoplay: {
        delay: 500,
        centeredSlides: true,
        disableOnInteraction: false,
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
   
      breakpoints: {
        480: {
          slidesPerView: 1,
          spaceBetween: 10,
        },

        640: {
          slidesPerView: 3,
          spaceBetween: 10,
        },
        768: {
          slidesPerView: 4,
          spaceBetween: 40,
        },
        1024: {
          slidesPerView: 5,
      spaceBetween: 30,
        }},
      
    });