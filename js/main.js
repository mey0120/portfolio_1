//fixheader
const header = document.querySelector('header');

function scrollFunc() {
    if (pageYOffset >= 90) {
        header.classList.add('on');
    } else {
        header.classList.remove('on');
    }
}
window.addEventListener('scroll', scrollFunc);

//circle

function circleTest() {
    $('.circle').circleProgress({
            value: 90 / 100,
            startAngle: 300,
            fill: {
                color: '#38a5db'
            }
        })
        .on("circle-animation-progress", function (event, progress) {
            $(this)
                .find("strong")
                .html(Math.round(90 * progress) + "<i>%</i>");
        });
        $('.circle1').circleProgress({
            value: 80 / 100,
            startAngle: 300,
            fill: {
                color: '#38a5db'
            }
        })
        .on("circle-animation-progress", function (event, progress) {
            $(this)
                .find("strong")
                .html(Math.round(80 * progress) + "<i>%</i>");
        });
        $('.circle2').circleProgress({
            value: 60 / 100,
            startAngle: 300,
            fill: {
                color: '#38a5db'
            }
        })
        .on("circle-animation-progress", function (event, progress) {
            $(this)
                .find("strong")
                .html(Math.round(60 * progress) + "<i>%</i>");
        });
}
$(function () {
    //function 안에 있는 circle 관련 코드를 circleTest() 로 따로 빼서 생성 함.
    circleTest();
});

$(function () {
    //skill클래스 첫번째 클래스의 anidation이 시작될때 circleTest 함수 수행
    $(".title h2:eq(0)").on("animationstart", function () {
        circleTest();
    });
});

//work 설명페이지
$(function(){
    $('.work_box li').click(function (e) {
                e.preventDefault();
                var target = $(this);
                var idx = target.index();

                $('.work_description').css({
                    'display': 'block'
                });
                $('.work_description .description').eq(idx).css({
                    'display': 'block'
                });
                $('.material-icons').click(function (e) {
                    e.preventDefault();
                    $('.work_description').css({
                        'display': 'none'
                    });
                    $('.work_description .description').eq(idx).css({
                        'display': 'none'
                    });
                });
});
});

//scrolla

$(function () {
    $(".animate").scrolla({
        mobile: true, //모바일버전시 활성화
        once: true, //스크롤시 딱 한번만 하고싶을땐 true
    });
});

//to-top scrollTo옵션
const toTopEL = document.querySelector("#to-top");
toTopEL.addEventListener("click", function () {
    gsap.to(window, 0.7, {
      scrollTo: 0,
    });
  });

//fade-in 애니메이션
const fadeEls = document.querySelectorAll(".fade-in");
fadeEls.forEach(function (fadeEl, index) {
  gsap.to(fadeEl, 1, {
    opacity: 1,
    delay: (index + 1) * 0.5,
  });
});

// mobile nav
$(function () {
    $(".nav_mo .open").on("click", function () {
        $(".nav_mo .open").toggleClass("on");
        $(".nav_mo ul").toggleClass("on");
    });
    //nav_mo 클래스 하위의 a 태그에 click 이벤트가 발생하면 토글 실행
    $(".nav_mo a").on("click", function () {
        $(".nav_mo ul").toggleClass("on");
        $(".nav_mo .open").toggleClass("on");
    });
});


// circle ui
const circle = document.querySelector('.ui')

let mouseX = 0
let mouseY = 0

let circleX = 0
let circleY = 0

let speed = 0.06

const animate = () => {
  let distX = mouseX - circleX
  let distY = mouseY - circleY
	let translatedValue = `translate3d(${circleX}px, ${circleY}px, 0 )`;
  
  circleX = circleX + (distX * speed)
  circleY = circleY + (distY * speed)    
	
	circle.style.transform = translatedValue;
  
  requestAnimationFrame(animate)
}

animate()

document.addEventListener('mousemove', (e) => {
  mouseX = e.clientX - circle.offsetWidth / 4;
  mouseY = e.clientY - circle.offsetHeight / 4;
})