//슬라이드걸기 

$(function () {
    $(".visual .slide").slick({
        arrows: false, //화살표 사용안함
        dots: true, //닷츠
        autoplay: true, //자동재생
        fade: true, //페이드인 효과        
        autoplaySpeed: 5000, //재생시간
        pauseOnHover: false, //마우스 오버시 슬라이드 멈춤 해제
        pauseOnFocus: false //포커스시 슬라이드 멈춤 해제
    });
});

//스크롤라

$(function () {
    $('.animate').scrolla({
        mobile: true, //모바일버전시 활성화
        once: false, //스크롤시 한번만 하고싶으면 true
    })
});

//fixheader

var scrollValue = 0;
scrollValue = $(document).scrollTop();
fixHeader();

$(window).on('scroll resize', function () {
    scrollValue = $(document).scrollTop();
    fixHeader();
});

function fixHeader() {
    if (scrollValue > 200) {
        $('header').addClass('on');
    } else {
        $('header').removeClass('on');
    }
}


//메뉴

$(function() {
   $('header .open').on('click', function(){
      $('nav').addClass('on');//선택한 요소에 클래스 속성값을 추가
   });
   $('nav .close').on('click', function() { //닫기버튼과 섹션영역 클릭시 제거
      $('nav').removeClass('on');//선택한 요소의 클래스 속성에서 지정한 값만 제거
   });
});