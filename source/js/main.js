(function ($) {
  $(".menu-toggle").on('click', function () {
    $('nav').toggleClass('active')
  })
  $('ul li').on('click', function () {
    $(this).siblings().removeClass('active')
    $(this).toggleClass('active')
  })
})($)