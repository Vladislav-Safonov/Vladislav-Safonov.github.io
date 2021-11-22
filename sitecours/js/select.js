$(function(){
  $(".select-list li a").click(function(){
       $(this).siblings("ul").slideToggle("fast");
       $(this).siblings("ul").children("ul").slideUp("fast");

       if($(this).siblings("ul").css("display")== "block"){
         $(this).parents("li").siblings('li').children('ul').slideUp("fast");
       }
  })
})