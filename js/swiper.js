const slider = document.querySelector('.swiper-container')

let mySwiper = new Swiper(slider, {
  slidesPerView: 1,
  spaceBetween: 40,
  grabCursor: true,
  loop: true,

  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: true,
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
})