$(document).ready(function () {
  $('.nav-menu > li > a').click(function (e) { 
    e.preventDefault();
    $(this).parent().find('ul').slideToggle();
    $(this).toggleClass('nav-active');

    $(this).parent().siblings().find('ul').slideUp();
    $(this).parent().siblings().find('a').removeClass('nav-active');
  });

  var mySwiper = new Swiper('.swiper-container', {
    // Optional parameters
    direction: 'horizontal',
    speed: 3000,
    loop: true,
    effect: 'coverflow',

    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },

    // Navigation arrows
    // navigation: {
    //   nextEl: '.swiper-button-next',
    //   prevEl: '.swiper-button-prev',
    // },

    // 自動輪播
    autoplay: {
      delay: 1500,
    },

    // And if we need scrollbar
    // scrollbar: {
    //   el: '.swiper-scrollbar'
    // }
  });

  // lightbox 效果
  lightbox.option({
    'resizeDuration': 200,
    'wrapAround': true
  });

  // 滑至 header
  $('.move-header a').click(function (e) { 
    e.preventDefault();
    $('html, body').animate({
      scrollTop: 0
    }, 700);
  });

  $("a[href$='.jpg']").addClass('fas fa-envelope-square');
  $("a[href$='.zip']").addClass('fas fa-phone-square');

});