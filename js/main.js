$(document).ready(function () {
  $(".menu > li > a[href^='#']").click(function(){
    event.preventDefault();  // 기본 a링크 동작 방지
    let target = $(this.hash);
    $('html, body').animate({ scrollTop: target.offset().top }, 500);
});

  $('.menu li').click(function () {
    $(this).addClass('active').siblings().removeClass('active'); //.이 들어가지 않음 
  });

  // $('.merlot, .coat').hide();
  
  // $(window).scroll(function () {
  //   if ($(this).scrollTop() > 1500) {
  //     $('.merlot, .coat').fadeIn(1000);
  //   } else {
  //     $('.merlot, .coat').fadeOut(1000);
  //   }

    
  // });

// if (matchMedia("screen and (min-width: 768px)").matches) {
//   $(".submenu_wrap").animate({
//     right: '35%'
//   });
//   $(".submenuclose").show();
// } else {
//   $(".submenu_wrap").animate({
//     right: '0%'
//   });
//   $(".submenuclose").show();
// }


  // var $menu     = $('.menu li.m'),
  // $contents = $('.scroll'),
  // $doc      = $('html, body');

  //   // 해당 섹션으로 스크롤 이동
  //   $menu.on('click','a', function(e){
  //       var $target = $(this).parent(),
  //           idx     = $target.index(),
  //           section = $contents.eq(idx),
  //           offsetTop = section.offset().top;
  //       $doc.stop()
  //               .animate({
  //                   scrollTop :offsetTop
  //               }, 800);
  //       return false;
  //   });
    
  // $(window).scroll(function(){
  //   var scltop = $(window).scrollTop();
  //   $.each($contents, function(idx, item){
  //       var $target   = $contents.eq(idx),
  //           i         = $target.index(),
  //           targetTop = $target.offset().top;

  //       if (targetTop <= scltop) {
  //           $menu.removeClass('active');
  //           $menu.eq(idx).addClass('active');
  //       }
  //       if (!(200 <= scltop)) {
  //           $menu.removeClass('acrive');
  //       }
  //   })

//});

const pTag1 = document.querySelector('.first-parallel')




let count1 = 0


function marqueeText(count, element, direction) {
  if (count > element.scrollWidth / 2) {
    element.style.transform = `translate3d(0, 0, 0)`
    count = 0
  }
  element.style.transform = `translate3d(${direction * count}px, 0, 0)`

  return count
}

function animate() {
  count1++


  count1 = marqueeText(count1, pTag1, -1)


  window.requestAnimationFrame(animate)
}

function scrollHandler() {
  count1 += 15
  count2 += 15
  count3 += 15
  count4 += 15
}

window.addEventListener('scroll', scrollHandler)
animate()



});