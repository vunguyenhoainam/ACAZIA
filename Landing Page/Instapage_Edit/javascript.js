// ===================================== DROPDOWN_HEADER ===========================================

document.onscroll = ()=>{
    var location = window.scrollY;
    if (location > 10) {
        document.querySelector('.Header-navbar').classList.add("fixed-nav");
    }else{
        document.querySelector('.Header-navbar').classList.remove("fixed-nav")
    }
}

// ==================================== SLIDE-SHOW =========================================

var slides = 1;
function clickSlide(n){
    showSlides(slides += n);
}
function showSlides(value){
    var x = document.querySelectorAll(".End-body-slide-item");
    for (var i = 0; i < x.length; i++){
        x[i].style.display = "none";  
    }
    if (value > x.length){slides = 1}    
    if (value < 1){slides = x.length}
    x[slides-1].style.display = "block";
}
// ==================================== SHOW-MENU =========================================

  function clickIcon(){
    var x = document.querySelector('.Header-mobile-list').classList.toggle('close');
    var x1 = document.querySelector('body').classList.toggle('fix');     
}

  function clickIcon1(){
    document.querySelector(".element1").classList.toggle('element-block');
  }
  function clickIcon2(){
    document.querySelector(".element2").classList.toggle('element-block');
  }
  function clickIcon3(){
    document.querySelector(".element3").classList.toggle('element-block');
  }

// ==================================== SHOW-FOOTER =========================================
  
function showFooter1(){
var x = document.querySelector(".End-footer-mobile-container-1").classList.toggle('footer-block');
}
function showFooter2(){
  var x = document.querySelector(".End-footer-mobile-container-2").classList.toggle('footer-block');
}
function showFooter3(){
  var x = document.querySelector(".End-footer-mobile-container-3").classList.toggle('footer-block');
}
function showFooter4(){
  var x = document.querySelector(".End-footer-mobile-container-4").classList.toggle('footer-block');
}
function showFooter5(){
  var x = document.querySelector(".End-footer-mobile-container-5").classList.toggle('footer-block');
}