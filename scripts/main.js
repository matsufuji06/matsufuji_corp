// class ScrollObserver {
  
// }
// document.addEventListener('DOMContentLoaded', function() {

//   const els = document.querySelectorAll('.cover-slide')
//   const cb = function(el, isIntersecting) {
//     els.forEach(el => {
//       if(isIntersecting) {
//         console.log('inview');
//         el.classList.add('inview');
//         // obserber.unobserve(entry.target);
//       } else {
//         console.log('outview');
  
//       }
//     });
//   }
  
//   const options = {
//     // 対象にしたい親要素
//     root: null,
//     // オブザーバーが反応する領域指定
//     rootMargin: "0px",
//     // 
//     threshold: 0,
//   };
  
//   const so = new ScrollObserver('.cover-slide', cb);

//   各要素を監視スタート
//   els.forEach(el => so.observe(el))
// });