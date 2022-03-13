
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