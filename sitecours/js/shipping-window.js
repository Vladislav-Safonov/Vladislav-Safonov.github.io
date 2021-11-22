$('.shipping-button , .shipping-bottom').click(function() {
  $('.shipping-window_shadow').css('display', 'block');
  $('.shipping-window').removeClass('shipping-window_hide');
})

$('.shipping-window__close-button').click(function() {
  $('.shipping-window_shadow').css('display', 'none');
  $('.shipping-window').addClass('shipping-window_hide');
})

$('.shipping-bottom').click(function() {
  $('.fixed-block__total-price').toggleClass('fixed-block__total-price_none');
})