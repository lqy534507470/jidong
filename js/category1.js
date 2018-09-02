// 构造一个函数


var CategorySlide = function () {

}

CategorySlide.prototype = {
  CategorySwiper: function () {
    var swiper = new Swiper('.swiper-container', {
      direction: 'vertical',
      slidesPerView: 'auto',
      freeMode: true,
      scrollbar: {
        el: '.swiper-scrollbar',
      },
      mousewheel: true,
    });
  },
  categoryLeftClick: function () {
    // 获取元素
    var ul = document.querySelector('.category-left .swiper-slide');

    var lis = document.querySelectorAll('.category-left .swiper-slide li');

    var swiperWrapper = document.querySelector('.category-left .swiper-wrapper');

    ul.addEventListener('click', function (e) {

      for (var i = 0; i < lis.length; i++) {
        lis[i].index = i;
        lis[i].classList.remove('active');
      }
      // console.log(e.target.parentNode);
      e.target.parentNode.classList.add('active');

      var translateY = -e.target.parentNode.index * e.target.parentNode.offsetHeight;

      var swiperWrapperHeight = swiperWrapper.offsetHeight;
      var ulHeight = ul.offsetHeight;
      var maxTranslateY = swiperWrapperHeight - ulHeight;

      if (translateY < maxTranslateY) {
        translateY = maxTranslateY;
      }
      swiperWrapper.style.transform = 'translate3d(0px, ' + translateY + 'px, 0px)';
      swiperWrapper.style.transition = 'all 0.3s';
    })

  }
}


window.addEventListener('load', function () {
  var categorySlide = new CategorySlide();
  categorySlide.CategorySwiper();
  categorySlide.categoryLeftClick()

})