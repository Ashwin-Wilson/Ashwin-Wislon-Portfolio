$(document).ready(function(){
    $('.contact-slide').height('0')
   $('.front-slide').slideUp(8000)
   $(".left-slide").width("0")

   $(".left-slide").animate({right:"100%"},1000)
   // $(".contact-slide").animate({slideDown:"100%"},1000)
   $(".contact-slide").slideDown(500)
   $(".line").mouseenter(function(){
       $(this).slideUp(5000)
   })
   $('.line').mouseleave(function(){
       $(this).slideDown(1000)
   })  




   $('#art').click(function(){
       $(".left-slide").animate({left:"0",width:'100%'},5000)
   })
   $('#left-home').click(function(){
       $(".left-slide").animate({right:"100%",width:'0'},5000)
   })
   $('#contact-me').click(function(){
       $(".contact-slide").animate({slideUp:"100%",height:'100%'},3000)
   })
   $('#contact-home').click(function(){
       $(".contact-slide").animate({slideDown:"100%",height:'0'},3000)
   })

})