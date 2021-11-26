$(function(){
  $(".select-list li a").click(function(){
       $(this).siblings("ul").slideToggle("fast");
       $(this).siblings("ul").children("ul").slideUp("fast");

       if($(this).siblings("ul").css("display")== "block"){
         $(this).parents("li").siblings('li').children('ul').slideUp("fast");
       }
  })
})

$(function() {
  let filter = $('[data-filter]')
  filter.click(function() {
    let category = $(this).data('filter');
    console.log(category);
    $('[data-cat]').each(function() {
      let workCategory = $(this).data('category');
      console.log(workCategory);
      if (workCategory != category) {
        $(this).addClass('item_hide');
      } else {
        $(this).removeClass('item_hide');
      }
    });
  });
});