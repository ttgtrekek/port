/********************** 농심 *****************************/

/* header */
let wHeight = $(window).height();   // 브라우저 높이
let dHeight = $(document).height(); // 컨텐츠의 높이
let hHeight = $("#header").outerHeight(); //80 헤더의 높이

let moveScroll;   //스크롤 값을 감지하기 위한 변수
let lastScrollTop = 0; //스크롤의 마지막 위치 값

$(window).scroll(function(){
  moveScroll = true;
});

setInterval(function(){
  if(moveScroll){
    hasScroll();
    moveScroll = false;
  }
},250)

function hasScroll(){
  let wScroll = $(this).scrollTop();
  if(wScroll > lastScrollTop){ //스크롤을 내렸을 때
    
    $("#header").addClass("on");
  } else {
    if( wScroll + wHeight < dHeight ){ //스크롤을 올렸을 때
       $("#header").removeClass("on");
    }
  }
  
  lastScrollTop = wScroll
  
}

/* banner */
var mySwiper = new Swiper ('#banner .swiper-container', {
  loop: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: 'true,'
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  autoplay: {
      delay: 5000,
  }
})

/* notice */
var mySwiper2 = new Swiper ('.notice .swiper-container', {
  loop: true,
  spaceBetween: 60,
  slidesPerView: 'auto',
  centeredSlides: true
})

/* story */
var mySwiper3 = new Swiper ('.story .swiper-container', {
  loop: true,
  slidesPerView: 'auto',
  centeredSlides: true
})



/************************* N.LIVE *********************/

/* #banner-live */
var mySwiper4 = new Swiper ('#banner-live .banner .swiper-container', {
  loop: true,
  slidesPerView: 'auto',
  centeredSlides: true ,
  pagination: {
    el: '.swiper-pagination',
    clickable: 'true,'
  }
})

/* nlive */
let tabBtn = $(".nlive-tabs > ul > li"); 
let tabCont = $(".nlive-posts > div");   

tabCont.hide().eq(0).show(); 

tabBtn.click(function(event){
  event.preventDefault();         
  let target = $(this);           
  let index = target.index();     
  tabBtn.removeClass("active");   
  target.addClass("active");      
  tabCont.css("display","none");
  tabCont.eq(index).css("display","block");
});

/* bonbox4 */
var swiper = new Swiper('#bonbox4 .swiper-container', {
  slidesPerView: 3,
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});
$('#stone').css('width','156px');