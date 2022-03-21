
import 'normalize.css'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './styles/main.scss'

import Swiper, { Navigation, Pagination } from 'swiper';

var swiper = new Swiper(".offerSwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    slidesPerGroup: 1,
    loop: true,
    loopFillGroupWithBlank: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    modules: [Navigation, Pagination],
    breakpoints: {
      315: {
        slidesPerView: 1,
        spaceBetween: 30
        
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 20
      },
      1000: {
        slidesPerView: 3,
        spaceBetween: 20
      },
    }
  });


  var swiper = new Swiper(".trendsSwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    slidesPerGroup: 1,
    loop: true,
    loopFillGroupWithBlank: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    modules: [Navigation, Pagination],
    breakpoints: {
      315: {
        slidesPerView: 1,
        spaceBetween: 20
        
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 20
      },
      1000: {
        slidesPerView: 3,
        spaceBetween: 20
      },
    }
  });

// swiper for buttons

var swiper = new Swiper(".btnSwiper", {
  slidesPerView: 1,
  spaceBetween: 20,
  freeMode: true,
  breakpoints: {
    315: {
      slidesPerView: 2.5,
      spaceBetween: 10,
    },
    600: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    900: {
      slidesPerView: 4,
      spaceBetween: 20,
    },
    1200: {
      slidesPerView: 5,
      spaceBetween: 20,
    },
  }
});