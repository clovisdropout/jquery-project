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
    // résuire heugth de la nav
    // positionner la nav en fixe en haut de la page.