$(window).on("scroll",function(){

    let positionY = $ (this).scrollTop();
    console.log(positionY);

    // afficher la fleche en bas
    if(positionY > 1300){
        $("#scrollTop").css("opacity", 1);
    }
    if(positionY < 550){
        $("#scrollTop").css("opacity", 0);
    }
    



})



    window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById("nav").style.padding = "30px 10px";
    document.getElementById("link").style.fontSize = "25px";
  } else {
    document.getElementById("nav").style.padding = "80px 10px";
    document.getElementById("link").style.fontSize = "35px";
  }
}

/*

if (positionY > 100){
  console.log("supérieur à 100")
}

*/

var slideIndex = 0;
var slides = $(".slides");

showSlide(slideIndex);

function showSlide(numberSlide){
    let idSlide = slides[numberSlide].id;
    $(".slides").removeClass("active");
    $(`#${idSlide}`).addClass("active");
}

$(".arrow").on("click",function(){
    // Si prev
    if($(this).hasClass("prev")){
        slideIndex--;
        if(slideIndex < 0){
            slideIndex = slides.length - 1;
        }
        showSlide(slideIndex);
    }
    // Si next
    if($(this).hasClass("next")){
        slideIndex++;
        if(slideIndex > slides.length - 1){
            slideIndex = 0;
        }
        showSlide(slideIndex);
    }
})


$(function() {
  var selectedClass = "";
  $(".fil-cat").click(function(){ 
  selectedClass = $(this).attr("data-rel"); 
   $("#portfolio").fadeTo(100, 0.1);
  $("#portfolio div").not("."+selectedClass).fadeOut().removeClass('scale-anm');
  setTimeout(function() {
    $("."+selectedClass).fadeIn().addClass('scale-anm');
    $("#portfolio").fadeTo(300, 1);
  }, 300); 
  
});
});