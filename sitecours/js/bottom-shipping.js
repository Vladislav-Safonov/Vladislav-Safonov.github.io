$('.item__button_add').click(function() {
  $('.fixed-block__total-price').removeClass('fixed-block__total-price_none'); // убираем display: none у нижнего меню
  shoppingCard = $(this).parent().parent(); // определяем на какой карточке нажата кнопка
  let getValueInputShoppingCard = $(shoppingCard).children('.items__value-price').children('input')[0].value; // получаем количество товаров
  let getValueItemPrice = $(shoppingCard).children('.items__value-price').children('input')[1].value; // получаем цену товара
  let getTotalPrice = $('.bottom-block__total-price')[0].value // получаем исходную итоговую стоимость товара
  let setTotalPrice = Number(getTotalPrice) + (getValueInputShoppingCard * getValueItemPrice); //считаем итоговую стоимость товара
  $('.bottom-block__total-price')[0].value = setTotalPrice; // присваем input итоговую стоимость
})

$('.total-price__hide').click(function() {
  $('.fixed-block__total-price').toggleClass('fixed-block__total-price_none');
})

