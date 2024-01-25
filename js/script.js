(function (m, e, t, r, i, k, a) {
  m[i] = m[i] || function () { (m[i].a = m[i].a || []).push(arguments) };
  m[i].l = 1 * new Date(); k = e.createElement(t), a = e.getElementsByTagName(t)[0], k.async = 1, k.src = r, a.parentNode.insertBefore(k, a)
})
  (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

ym(86052773, "init", {
  clickmap: true,
  trackLinks: true,
  accurateTrackBounce: true,
  webvisor: true
});

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

const headerButtonForm = document.querySelector('#button-form')
const headerButtonForm1 = document.querySelector('#button-form1')
//  const headerForm = document.querySelector('.write__me');
const popupDel = document.querySelector('#del');

// headerButtonForm.addEventListener('click', () => {
//   headerForm.classList.add('active');
//   //body.classList.toggle('lock');
// })

// headerButtonForm1.addEventListener('click', () => {
//   headerForm.classList.add('active');
//   //body.classList.toggle('lock');
// })

// popupDel.addEventListener('click', () => {
//   headerForm.classList.remove('active');
//   //body.classList.toggle('lock');
// })

const tabBut = document.querySelectorAll('.tab__container')
const tabCont = document.querySelector('.tab__content');
const tabarrow = document.querySelector('.tab__arrow');
tabBut.forEach((elem) => {
  elem.addEventListener('click', (event) => {
    elem.classList.toggle('active');
    let dataPage = elem.getAttribute('data-infotab');
    let itemsPage = document.querySelector(dataPage);
    itemsPage.classList.toggle('active');
  })
})

const tabPages = document.querySelectorAll('.agrar__block')
const info2 = document.querySelectorAll('.info2')
tabPages.forEach((elem) => {
  elem.addEventListener('click', () => {
    elem.classList.add('active');
    let dataPage = elem.getAttribute('data-tab');
    let itemsPage = document.querySelector(dataPage);
    itemsPage.classList.add('active');
    ym(86052773, 'reachGoal', 'dops');
    //body.classList.toggle('lock');
  })
})

var isFirst = true;

$(window).scroll(function () {
  if ($(window).scrollTop() + $(window).height() == $(document).height()) {
    if (isFirst) {
      ym(86052773, 'reachGoal', 'scroll');
      isFirst = false;
    }
  }
});

const inDel = document.querySelectorAll('.info2__del');
inDel.forEach((elem) => {
  elem.addEventListener('click', () => {
    tabPages.forEach((elem) => {
      elem.classList.remove('active')
    })
    info2.forEach((elem) => {
      elem.classList.remove('active')
    })
    //body.classList.toggle('lock');
  })
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

const info22 = document.querySelectorAll('.info2');

info22.forEach((elem) => {
  elem.addEventListener('click', (event) => {

    info2.forEach((elem) => {
      elem.classList.remove('active')
    })
  })
})


//var mySwiper = new Swiper('.main__slider', {

//  //slidesPerColumn: 2,
//  //slidesPerColumnFill: 'row',



//  slidesPerGroup: 1,
//  slidesPerView: 4,
//  breakpoints: {
//    // when window width is <= 575px
//    1231: {
//      slidesPerView: 4,
//    },
//    1160: {
//      slidesPerView: 3,
//      spaceBetween: 110,
//    },
//    1040: {
//      slidesPerView: 3,
//      spaceBetween: 60,
//    },
//    945: {
//      slidesPerView: 3,
//      spaceBetween: 15,
//      loop: false,
//    },
//    850: {
//      slidesPerView: 2,
//      slidesPerColumn: 2,
//      slidesPerColumnFill: 'row',
//      spaceBetween: 0,
//      //initialSlide: 1,
//    },
//    365: {
//      slidesPerView: 2,
//      slidesPerColumn: 2,
//      slidesPerColumnFill: 'row',

//      //initialSlide: 1,
//    },
//    320: {
//      spaceBetween: 15,

//      //initialSlide: 1,
//    },
//  }
//})

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
    //768:{
    //  //что случится
    //  slidesPerView: 1,
    //  
    //},
    //1024:{
    //  slidesPerView: 2,
    //  spaceBetween: 20,
    //},
    //1366:{
    //  slidesPerView: 3,
    //},
    //1500:{
    //  slidesPerView: 5,
  },
})

var mySwiper = new Swiper('.prep__slider', {
  slidesPerView: 5,
  centerMode: true,
  centeredSlides: true,
  initialSlide: 1,
  pagination: {
    //Иницылизацыя
    el: '.prep__slider-pug',
    //Тип
    type: 'bullets',//fraction
    //Возможносьть переключать слайды Пагинацыей
    clickable: true,
  },
  navigation: {
    //Иницылизацыя
    nextEl: '.prep__slider-next',
    prevEl: '.prep__slider-prev',
  },
  breakpoints: {
    ////Число пиксилей
    1100: {
      //что случится
      slidesPerView: 5,
      centerMode: true,
      centeredSlides: true,
      initialSlide: 1,
    },
    900: {
      //что случится
      slidesPerView: 3,

    },
    750: {
      slidesPerView: 2,

    },
    310: {
      slidesPerView: 1,
    },
  },
})
$('a[href^="#"').on('click', function () {

  let href = $(this).attr('href');
  console.log(href);

  $('html, body').animate({
    scrollTop: $(href).offset().top - 200
  });
  return false;
});
$(function () {
  $('.minimized1').click(function (event) {
    var i_path = $(this).attr('src');
    $('body').append('<div id="overlay"></div><div id="magnify1"><img src="https://ecobiosfera.ru/' + i_path + '"><div id="close-popup"><i></i></div></div>');
    $('#magnify1').css({
      left: ($(document).width() - $('#magnify1').outerWidth()) / 2,
      // top: ($(document).height() - $('#magnify').outerHeight())/2 upd: 24.10.2016
      top: ($(window).height() - $('#magnify1').outerHeight()) / 2
    });
    $('#overlay, #magnify1').fadeIn('fast');
  });

  $('body').on('click', '#close-popup, #overlay', function (event) {
    event.preventDefault();
    $('#overlay, #magnify1').fadeOut('fast', function () {
      $('#close-popup, #magnify1, #overlay').remove();
    });
  });
});

$(function () {
  $("#write__input-phone").mask("+7(999) 999-9999");
  $('.minimized').click(function (event) {
    var i_path = $(this).attr('src');
    $('body').append('<div id="overlay"></div><div id="magnify"><img src="https://ecobiosfera.ru/' + i_path + '"><div id="close-popup"><i></i></div></div>');
    $('#magnify').css({
      left: ($(document).width() - $('#magnify').outerWidth()) / 2,
      // top: ($(document).height() - $('#magnify').outerHeight())/2 upd: 24.10.2016
      top: ($(window).height() - $('#magnify').outerHeight()) / 2
    });
    $('#overlay, #magnify').fadeIn('fast');
  });

  $('body').on('click', '#close-popup, #overlay', function (event) {
    event.preventDefault();
    $('#overlay, #magnify').fadeOut('fast', function () {
      $('#close-popup, #magnify, #overlay').remove();
    });
  });
});