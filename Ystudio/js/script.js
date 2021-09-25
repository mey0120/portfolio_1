//a클릭했을때 위로 튕김 제거

$(document).on('click', 'a[href="#"]',function(e){
    e.preventDefault()
});

//메뉴

$(function() {
   $('header .menuOpen').on('click', function(){
      $('.gnb').addClass('on');//선택한 요소에 클래스 속성값을 추가
   });
   $('.gnb .close').on('click', function() { //닫기버튼과 섹션영역 클릭시 제거
      $('.gnb').removeClass('on');//선택한 요소의 클래스 속성에서 지정한 값만 제거
   });
});

//스크롤 애니메이션

$(function() {
	$('.animate').scrolla({
		mobile: true, //모바일버전시 활성화
		once: true, //스크롤시 딱 한번만 하고싶을땐 true
	});    
      }); 


//slick.js 슬라이드

$(function(){
    $('.visual .slide').slick({
        arrows: true,  //화살표
        dots: false, //인디케이스 해제
        fade: true,//페이드효과
        autoplay: true,//자동재생
        autoplaySpeed:4000,// 재생시간
        pauseOnHover: false,//마우스 호버시 정지
        pauseOnFocus: false //포커스시 정지
    });
    
});

//fixheader

   var scrollValue = 0;
scrollValue = $(document).scrollTop(); 
fixHeader();

$(window).on('scroll resize', function(){
   scrollValue = $(document).scrollTop(); 
   fixHeader();
});

function fixHeader(){
    if(scrollValue > 150) {
        $('header').addClass('on');
    }else {$('header').removeClass('on');}
}