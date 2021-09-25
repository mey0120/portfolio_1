

// badge 숨기는 함수
// _.throttle(함수, 시간) 일정한 시간마다 함수를 실행, 스크롤이벤트시 사용
// gsap.to(요소,지속시간,{옵션}) 애니메이션효과
const badgeEl = document.querySelector("header .badges");
const toTopEL = document.querySelector("#to-top");

window.addEventListener(
  "scroll",
  _.throttle(function () {
    console.log(window.scrollY);
    if (window.scrollY > 500) {
      //badge숨기기
      gsap.to(badgeEl, 0.6, {
        opacity: 0,
        display: "none",
      });
      // to-top버튼 보이기
      gsap.to(toTopEL, 0.2, {
        x: 0,
      });
    } else {
      //badge보이기
      gsap.to(badgeEl, 0.6, {
        opacity: 1,
        display: "block",
      });
      // to-top버튼 숨기기
      gsap.to(toTopEL, 0.2, {
        x: 100, // 오른쪽으로100픽셀이동
      });
    }
  }, 300)
);

//to-top scrollTo옵션
toTopEL.addEventListener("click", function () {
  gsap.to(window, 0.7, {
    scrollTo: 0,
  });
});

//visual 이미지 fade-in 애니메이션
const fadeEls = document.querySelectorAll(".visual .fade-in");
fadeEls.forEach(function (fadeEl, index) {
  gsap.to(fadeEl, 1, {
    opacity: 1,
    delay: (index + 1) * 0.7,
  });
});

//슬라이드 new Swiper(선택자, 옵션)
//notice-line 슬라이드
new Swiper(".notice-line .swiper-container", {
  direction: "vertical",
  autoplay: true,
  loop: true,
});
//promotion 슬라이드
new Swiper(".promotion .swiper-container", {
  slidesPerView: 3, //한번에 보이는 갯수
  spaceBetween: 10, //사이 여백
  centeredSlides: true, //1번 슬라이드 가운데 보임
  loop: true,
  autoplay: {
    delay: 5000,
  }, //5초 마다 움직임
  pagination: {
    el: ".promotion .swiper-pagination", //페이지 번호 요소 선택자
    clickable: true, //사용자가 페이지 번호 요소 제어 가능
  },
  navigation: {
    prevEl: ".promotion .swiper-prev",
    nextEl: ".promotion .swiper-next",
  },
});
//awards 슬라이드
new Swiper(".awards .swiper-container", {
  autoplay: true,
  loop: true,
  spaceBetween: 30,
  slidesPerView: 5,
  navigation: {
    prevEl: ".awards .swiper-prev",
    nextEl: ".awards .swiper-next",
  },
});

//promotion toggle
const promotionEl = document.querySelector(".promotion");
const promotionToggleBtn = document.querySelector(".toggle-promotion");
let isHidePromotion = false;

promotionToggleBtn.addEventListener("click", function () {
  isHidePromotion = !isHidePromotion; //!을 붙이면 값이 반대가 된다 false를 true로
  if (isHidePromotion) {
    //숨김처리
    promotionEl.classList.add("hide");
  } else {
    //보임처리
    promotionEl.classList.remove("hide");
  }
});

// 범위 랜덤 함수(소수점 2자리까지)
//random(1.5, 2.5)1.5~2.5사이값
function random(min, max) {
  // `.toFixed()`를 통해 반환된 문자 데이터를,
  // `parseFloat()`을 통해 소수점을 가지는 숫자 데이터로 변환
  return parseFloat((Math.random() * (max - min) + min).toFixed(2));
}

//floating 애니메이션
function floatingObject(selector, delay, size) {
  gsap.to(
    selector, //선택자
    random(1.5, 2.5), //동작 시간
    {
      //옵션
      y: size, //size 값이 들어감
      repeat: -1, //무한반복
      yoyo: true, //애니메이션 반대 동작 실행
      ease: Power1.easeInOut,
      delay: random(0, delay), //delay값이 들어감
    }
  );
}
floatingObject(".floating1", 1, 15);
floatingObject(".floating2", 0.5, 15);
floatingObject(".floating3", 1.5, 20);

//scrollmagic
const spyEls = document.querySelectorAll("section.scroll-spy");
spyEls.forEach(function (spyEl) {
  new ScrollMagic.Scene({
    triggerElement: spyEl, //보여짐 여부를 감시할 요소를 지정
    reiggerHook: 0.8, //화면의 top을 0 맨아래가 1 감시하는 요소가 뷰포트의 0.8 지점일때 실행함
  })
    .setClassToggle(spyEl, "show")
    .addTo(new ScrollMagic.Controller());
});

