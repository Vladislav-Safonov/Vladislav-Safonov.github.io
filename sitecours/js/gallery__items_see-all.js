$('#see-all_button').click(function() {
  $( ".items-gallery__item" ).each(function( index ) {
    if(index>8) {
      $(".items-gallery__item").toggleClass('gallery__items_see-all_none');
    };
  });
  $('.see-all__button-img').toggleClass('see-all__button-img_rotate');
  $('.see-all__text').toggleClass('gallery__items_see-all_hide');
});

$('#see-all_button').click(function() {
  let getTextButtonHideGallery = $('.gallery__items_see-all_hide').text();
  if(getTextButtonHideGallery=='Скрыть'){
    $('html, body').animate({
      scrollTop: $(".block__items-gallery_main-text").offset().top  // класс объекта к которому приезжаем
  }, 1000); // Скорость прокрутки
}
})