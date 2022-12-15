$(document).ready(function () {

  // window.addEventListener("wheel", (e) => {
  //   if (e.deltaY > 0) {
  //     window.scrollBy({
  //       top: window.innerHeight,
  //       left: 0,
  //       behavior: "smooth",
  //     });
  //   } else {
  //     // scrollTo -> 원하는 위치에
  //     window.scrollBy({
  //       top: -window.innerHeight,
  //       left: 0,
  //       behavior: "smooth",
  //     });
  //   }
  // });


  $(".menuclose").hide();

  $(".gnb .ham").click(function () {


    $(".mainmenu_wrap").animate({
      right: '0'
    });
    $(".menuclose").show();
  });

  $(".menuclose").click(function () {
    $(".mainmenu_wrap").animate({
      right: '-100%'
    });
    $(".submenu_wrap").animate({
      right: '-100%'
    });
    $(".menuclose").hide();
  });


  $(".mainmenu li").click(function () {


    if (matchMedia("screen and (min-width: 768px)").matches) {
      $(".submenu_wrap").animate({
        right: '35%'
      });
      $(".submenuclose").show();
    } else {
      $(".submenu_wrap").animate({
        right: '0%'
      });
      $(".submenuclose").show();
    }

  });

  $(".submenuclose").click(function () {
    $(".submenu_wrap").animate({
      right: '-100%'
    });
    $(".submenuclose").hide();

  });



  $(window).scroll(function () {
    if ($(this).scrollTop() > 1000) {
      $('.gotop, .qna-btn').fadeIn();
    } else {
      $('.gotop, .qna-btn').fadeOut();
    }
  });























  //search
  $('.search').hide();

  $('.searchicon').click(function () {
    $('.search').slideDown();
  });

  $('.search_close').click(function () {
    $('.search').slideUp();
  });


  //qna
  $('.qna').hide();

  $('.qna-btn').click(function () {
    $('.qna').fadeIn();
  });

  $('.qna-close').click(function () {
    $('.qna').fadeOut();
  }); $('.gotop').hide();
  $(window).scroll(function () {
    if ($(this).scrollTop() > 1000) {
      $('.gotop').fadeIn();
    } else {
      $('.gotop').fadeOut();
    }
  });


  $('.gotop, .qna-btn').hide();
  $(window).scroll(function () {
    if ($(this).scrollTop() > 1000) {
      $('.gotop, .qna-btn').fadeIn();
    } else {
      $('.gotop, .qna-btn').fadeOut();
    }
  });

  $('.gotop').click(function () {
    $('html,body').animate({
      scrollTop: '0'
    }, 500); //시간
  });
});