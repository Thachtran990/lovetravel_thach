
// Slider of The Best Beaches
$(document).ready(function(){
    $('.fade').slick({
      dots: true,
      infinite: true,
      speed: 1000,
      fade: true,
      cssEase: 'linear',
      prevArrow: false,
      nextArrow: false,
      arrows: false,
      autoplay: true,
      autoplaySpeed: 3000
    });
  });



//  Auto Scroll to Top
window.onscroll = function () { scrollFunction() };
function scrollFunction() {

    if (document.body.scrollTop > 600 || document.documentElement.scrollTop > 600) {
        document.getElementById("btnBackToTop").style.display = "block";
    } else {
        document.getElementById("btnBackToTop").style.display = "none";
    }
}

document.getElementById('btnBackToTop').addEventListener("click", function () {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
});


// đóng mở sidebar trên PC
function openSidebarOnPC() {
    document.getElementById("header__collapse-menu").style.right = "0";
  }
  
  function closeSidebarOnPC() {
    document.getElementById("header__collapse-menu").style.right = "-100%";
  }

  

  // Đóng mở sidebar trên Tablet & Mobile
  function openSidebarOnMB() {
    document.getElementById("navbar__category").style.right = "0";
  }
  
  function closeSidebarOnMB() {
    document.getElementById("navbar__category").style.right = "-100%";
  }