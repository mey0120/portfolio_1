//gnb
$(function () {
    $(".gnb > li > a").on("mouseenter focus", function () {
        var gnbindex = $(".gnb > li > a").index($(this));

        /*alert(gnbindex); 인덱스값이 제대로 뜨는지 확인 */
        $(".gnb .inner").removeClass("on");
        $(".gnb .inner:eq(" + gnbindex + ")").addClass(
            "on"
        ); /*eq는 인덱스값을 선택해서 가져올 수 있는 선택메소드임 */
    }); /*결과부터 확인*/
    $("header").on("mouseleave", function () {
        $(".gnb .inner").removeClass("on");
    });
});


//fixHeader
var scrollTop = 0;
scrollFix = $(document).scrollTop();
fixHeader();
//윈도우창 조절시 이벤트
$(window).on("scroll resize", function () {
    scrollFix = $(document).scrollTop();
    fixHeader();
});


//고정헤더 함수
function fixHeader() {
    if (scrollFix > 150) {
        $("header").addClass("on");
    } else {
        $("header").removeClass("on");
    }
}


//글자애니메이션  Splitting 
$(function () {
    Splitting();
});


//슬라이드
$(function () {
    $('.visual .slide').slick({
        arrows: true, //화살표
        dots: true, //인디케이터
        autoplay: true, //자동재생
        fade: true, //페이드인효과
        autoplaySpeed: 7000, //재생시간
        pauseOnHover: false, //호버시 멈추는 멈추는것을 해제
        pauseOnFocus: false,
    });
    $(".slick-prev").text("prev"); //버튼의 텍스트 변경
    
    //slide2 
    $('.slide2').slick({
        arrows:false,
        dots:true,
        autoPlay:true,
        infinite:true,
        slidesToShow:2,
        autoplaySpeed:6000,
        pauseOnHover:true,
        pauseOnFocus:true,
    });
   $('#slick-slide-control10').text('서울 마곡지구 업무용지');
   $('#slick-slide-control11').text('서울 마곡지구 대방디엠시티2차');
   $('#slick-slide-control12').text('화성 동탄 1차 대방디엠시티 더 센텀');
   $('#slick-slide-control13').text('광주 수완 대방노블랜드6차');
});

//scrolla ani
$(function(){
    $('.animate').scrolla({
       mobile:true,//모바일일때활성
        one:false,//스크롤시 한번만 하려면 true
    });
});