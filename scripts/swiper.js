const swiper = new Swiper('.swiper', {
  // Optional parameters

  // ↓コメントアウトすると、横のスライドになる。
  // direction: 'vertical',

  loop: true,

  // ↓スライド時のエフェクト指定
  // effect: 'fade',
  effect: 'coverflow',

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});