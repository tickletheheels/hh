$(document).ready(function() {
  
  $('.menu li:first-child').addClass('active');

  $('.menu li').click(function () {
    $(this).addClass('active').siblings().removeClass('active'); //.이 들어가지 않음 
  });

  
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