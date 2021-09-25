//circleBox SVG길이 구하기
$(function () {
    $(".svgAni")
        .find("path")
        .each(function (i, path) {
            var length = path.getTotalLength();
            //alert(length);
        });
});

//스크롤될때 애니메이션
$(function () {
    $(".animate").scrolla({
        mobile: true, //모바일버전시 활성화
        once: true, //스크롤시 딱 한번만 하고싶을땐 true
    });
});

//배경색 변경
$(window).on("scroll resize", function () {
    var scrollTop = $(document).scrollTop();
    bgColor();
    function bgColor() {
        if (scrollTop > 1400) {
            $("body").addClass("on");
        } else {
            $("body").removeClass("on");
        }
        if (scrollTop > 2700) {
            $("body").removeClass("on");
        }
    }
});

//menuOpen작성
$(function () {
    $(".menuOpen button.open").on("click", function () {
        $(".menuOpen .menuWrap").addClass("on");
    });
    $(".menuOpen .menuWrap .close").on("click", function () {
        $(".menuOpen .menuWrap").removeClass("on");
    });
});
