$(window).on("scroll",function(){

    let positionY = $ (this).scrollTop();
    console.log(positionY);

    // afficher la fleche en bas
    if(positionY > 550){
        $("#scrollTop").css("opacity", 1);
    }
    if(positionY < 550){
        $("#scrollTop").css("opacity", 0);
    }
    



})


// lorsque positionY est supérieur à 100 
    // résuire heigth de la nav
    // positionner la nav en fixe en haut de la page.

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