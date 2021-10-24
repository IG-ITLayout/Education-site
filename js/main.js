// инициализация слайдера + буллеты
const $sliders = document.querySelectorAll('[data-slider="chiefslider"]');
$sliders.forEach(function ($item) {
  if (
    $item.querySelector(".slider__item").getBoundingClientRect().width *
      $item.querySelectorAll(".slider__item").length >
    $item.querySelector(".slider__wrapper").getBoundingClientRect().width
  ) {
    // добавим индикаторы
    const $indicators = document.createElement("ol");
    $indicators.className = "slider__indicators";
    let inner = "";
    $item
      .querySelectorAll(".slider__item")
      .forEach(function ($sliderItem, index) {
        inner += `<li data-slide-to="${index}"></li>`;
      });
    $indicators.innerHTML = inner;
    $item.appendChild($indicators);
    // инициализируем слайдер
    new ChiefSlider(".slider");
  } else {
    $item.querySelectorAll(".slider__control").forEach(function ($control) {
      $control.style.display = "none";
    });
  }
});
// скрыть/показать хедер
let hideHeader = document.querySelector(".header__hide-header");
let headerInner = document.querySelector(".header__inner");

hideHeader.addEventListener("click", function () {
  headerInner.classList.toggle("hidden");
  hideHeader.classList.toggle("showButton");
});
// бургер меню
let menuBurger = document.querySelector(".menu__wrapper");
let menuButton = document.querySelector(".menu__burger");
menuButton.addEventListener("click", function () {
  menuButton.classList.toggle("show-menu");
  menuBurger.classList.toggle("active-menu");
});
