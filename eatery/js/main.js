$(document).ready(function(){
    /*navbar*/
    $(window).scroll(function(){
        var scroll = $(window).scrollTop();
          if (scroll > 50) {
            $("#navbar").addClass("background-navbar");
           
          }

          else{
              $("#navbar").removeClass("background-navbar");
             
          }
      });
});
/********************************************************/

$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        
    }
});