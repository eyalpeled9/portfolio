var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1} 
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none"; 
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block"; 
  dots[slideIndex-1].className += " active";
};

// function func () {
//     alert("hi");
// }

// var obj = {name: "Roni", getSomething: func};
// obj.getSomething();
// obj.name = "Eyal" 


/*  tryyyyyyyyyyyyyyyyyyyyyyyyyyy */

document.addEventListener("scroll", (event) => {
    var farFromTop = Math.abs(document.body.getBoundingClientRect().top);
    console.log(farFromTop);
    var oapcityText = document.querySelector(".text");
    if(farFromTop > 80) {
        oapcityText.style.opacity = 0;
    } else {
        oapcityText.style.opacity = 1;
    }
});


// JQUERY:

// $(document).ready(function(){
//     $("document.addEventListener").scroll(function(){
//       if ($(this).scrolltop() > 0){
//           $(".text2").css({"opacity" : "0"})
//       }
//       else {
//        $(".text").css({"opacity" : "1"}) 
//       }
//     })
// })

// END JQUERY


