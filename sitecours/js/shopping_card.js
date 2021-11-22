$('.item__button_plus').click(function() {
  shoppingCard = $(this).parent().parent();
  getValueInputShoppingCard = $(shoppingCard).children('.items__value-price').children('input')[0].value;
  $(shoppingCard).children('.items__value-price').children('input')[0].value = Number(getValueInputShoppingCard) + 1;
  if(getValueInputShoppingCard > 100) {
    $(shoppingCard).children('.items__value-price').children('input')[0].value = 100;
    alert("За один заказ не больше 100 одинаковых товаров");
  }
})

$('.item__button_minus').click(function() {
  shoppingCard = $(this).parent().parent();
  getValueInputShoppingCard = $(shoppingCard).children('.items__value-price').children('input')[0].value;
  $(shoppingCard).children('.items__value-price').children('input')[0].value = Number(getValueInputShoppingCard) - 1;
  if(getValueInputShoppingCard <=1) {
    $(shoppingCard).children('.items__value-price').children('input')[0].value = 1;
  }
})