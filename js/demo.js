window.addEventListener('load', function () {
    var jd = new JD();
    jd.searchGradient();
    jd.timeDown();
    jd.slide();
})

// 构造函数
var JD = function () {

}
// 给构造函数的原型创建一个对象
JD.prototype = {
    // 1.顶部的滚动事件
    searchGradient: function () {
        scrollTopFun();
        window.addEventListener('scroll', scrollTopFun);

        function scrollTopFun() {

            var scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
            // console.log(scrollTop);

            var slideHeight = document.querySelector('#slide').offsetHeight;

            // console.log(slideHeight);
            var opcity = 0;

            if (scrollTop < slideHeight) {
                opcity = scrollTop / slideHeight * 1;
            } else {
                opcity = 1;
            }
            document.querySelector('#header').style.backgroundColor = "rgba(222, 24, 27," + opcity + ")";
        }
    },
    // 2.时间秒杀
    timeDown: function () {

        // 获取总时间
        var timeAll = new Date(2018, 7, 30, 17, 0, 0).getTime();
        // 获取当前时间
        var timeNow = new Date().getTime();

        // 总的秒数
        var timeSecond = Math.floor((timeAll - timeNow) / 1000);
        // console.log(timeSecond);

        var spans = document.querySelectorAll('.seckill-time span');
        var timeId = setInterval(function () {

            timeSecond--;
            if (timeSecond <= 0) {
                timeSecond = 0;
                clearInterval(timeId);
            }
            // 总的小时
            var hour = Math.floor(timeSecond / 60 / 60) % 24;
            // console.log(hour);

            // 总的分钟
            var minter = Math.floor(timeSecond / 60) % 60;
            // console.log(minter);
            // 总的秒数
            var second = timeSecond % 60;
            // console.log(second);

            spans[0].innerHTML = Math.floor(hour / 10);
            spans[1].innerHTML = hour % 10;
            spans[3].innerHTML = Math.floor(minter / 10);
            spans[4].innerHTML = minter % 10;
            spans[6].innerHTML = Math.floor(second / 10);
            spans[7].innerHTML = second % 10;
        }, 1000)
    },
    // 3.swiper轮播图重置
    slide: function () {
        var swiper = new Swiper('.swiper-container', {
            autoplay: true,
            loop: true,
            pagination: {
                el: '.swiper-pagination',
            },
        })
    }
}

window.addEventListener('resize', function () {


    // 获取当前的屏幕宽度
    var maxWidth = document.body.offsetWidth || document.documentElement.offsetWidth;
    if (maxWidth < 320) {
        maxWidth = 320;
    }else if(maxWidth>640){
        maxWidth=640;
    }

    console.log(maxWidth);
    var size = maxWidth / 375 * 100;
    console.log(size);



    document.querySelector('html').style.fontSize = size + 'px';
    console.log(document.querySelector('html').style.fontSize);
    
})