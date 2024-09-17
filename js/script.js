(function (m, e, t, r, i, k, a) {
  m[i] = m[i] || function () { (m[i].a = m[i].a || []).push(arguments) };
  m[i].l = 1 * new Date(); k = e.createElement(t), a = e.getElementsByTagName(t)[0], k.async = 1, k.src = r, a.parentNode.insertBefore(k, a)
})

const burger = document.querySelector('.burger');
const menu = document.querySelector('.header__menu')
const body = document.querySelector('body');
const slider = document.querySelector('.main__swiper');
headerButton = document.querySelector('.header-button');
burger.addEventListener('click', () => {
  if (window.matchMedia("(max-width: 991px)").matches){
    if (!document.querySelector('.burger').classList.contains("active")){
      burger.classList.add('active')
      menu.classList.add('active');
      body.classList.add('lock');
      slider.classList.add('active')
      headerButton.classList.add('active');
    }
    else{
      burger.classList.remove('active')
      menu.classList.remove('active');
      body.classList.remove('lock');
      slider.classList.remove('active')
      headerButton.classList.remove('active');
    }
    }
})
const menuLinks = document.querySelectorAll('.header__link');

if (menuLinks.length > 0) {
  menuLinks.forEach(elem => {
    elem.addEventListener("click", onClick);
  });
  function onClick(elem) {
    burger.classList.remove('active')
    menu.classList.remove('active');
    body.classList.remove('lock');
    slider.classList.remove('active')
    headerButton.classList.remove('active');

  }
}

var mySwiper = new Swiper('.use__slider', {
  slidesPerView: 3,
  centerMode: true,
  pagination: {
    //Иницылизацыя
    el: '.use__slider-pug',
    //Тип
    type: 'bullets',//fraction
    //Возможносьть переключать слайды Пагинацыей
    clickable: true,
  },
  navigation: {
    //Иницылизацыя
    nextEl: '.use__slider-arrow-next',
    prevEl: '.use__slider-arrow-prev',
  },
  centeredSlides: true,
  spaceBetween: 15,
  initialSlide: 1,

  breakpoints: {
    ////Число пиксилей
    1200: {
      //что случится
      slidesPerView: 3,
    },
    961: {
      //что случится
      slidesPerView: 2,
      centerMode: false,
    },

    800: {
      //что случится
      slidesPerView: 2,
      centerMode: false,
      //spaceBetween: 50,
    },

    310: {
      //что случится
      slidesPerView: 1,
      centerMode: true,
    },
  },
})

var mySwiper = new Swiper('.prep__slider', {
  slidesPerView: 2,
  centerMode: true,
  centeredSlides: true,
  initialSlide: 1,
  autoplay: true,
  pagination: {
    el: '.prep__slider-pug',
    type: 'bullets',//fraction
    clickable: true,
  },
  navigation: {
    nextEl: '.prep__slider-next',
    prevEl: '.prep__slider-prev',
  },
  breakpoints: {
    1100: {
      slidesPerView: 2,
      centerMode: true,
      centeredSlides: true,
      initialSlide: 1,
    },
    900: {
      slidesPerView: 2,

    },
    750: {
      slidesPerView: 2,

    },
    310: {
      slidesPerView: 1,
    },
  },
})

