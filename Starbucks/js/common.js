// search클릭시 focus
const searchEl = document.querySelector(".search");
const searchInputEl = searchEl.querySelector("input");

searchEl.addEventListener("click", function () {
  searchInputEl.focus();
});
// focus되면 클래스추가, 속성추가
searchInputEl.addEventListener("focus", function () {
  searchEl.classList.add("focused");
  searchInputEl.setAttribute("placeholder", "통합검색");
});
// blur되면 클래스,속성 제거
searchInputEl.addEventListener("blur", function () {
  searchEl.classList.remove("focused");
  searchInputEl.setAttribute("placeholder", "");
});

//footer 년도 변경되게하기
const thisYear = document.querySelector(".this-year");
thisYear.textContent = new Date().getFullYear(); //2021 올해의 연도 출력
