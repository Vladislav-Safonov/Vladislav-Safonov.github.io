$('.shipping-button , .shipping-bottom').click(function(e) {
  e.preventDefault();
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

// main shipping code

let productImage = [];
let productName = [];
let productAmount = [];
let productPrice = [];
let i = -1;

$('.item__button_add').click(function() {
  shoppingCard = $(this).parent().parent(); // определяем на какой карточке нажата кнопка
  let getValueItemImage = $(shoppingCard).children().children('img')[0]; // получаем фото товара
  console.log(getValueItemImage);
  productImage.push(getValueItemImage); // засовываем фото товара в массив
  let getValueItemName = $(shoppingCard).children()[1].textContent; // получаем имя товара
  productName.push(getValueItemName); // засовываем имя товара в массив
  let getValueInputShoppingCard = $(shoppingCard).children('.items__value-price').children('input')[0].value; // получаем количество товаров
  productAmount.push(getValueInputShoppingCard); // засовываем количество товара в массив
  let getValueItemPrice = $(shoppingCard).children('.items__value-price').children('input')[1].value; // получаем цену товара
  productPrice.push(getValueItemPrice); // засовываем стоимость товара в массив
  i = i + 1; // счётчик добавленных товаров
  
  $('.shipping-window__items').append('<div class="shipping-window__item"><div class="shipping-window__item-img">'
  + '</div>' + '<div class="shipping-window__item-name">' 
  + productName[i] + '</div>' + '<div class="shipping-window__item-amount">Кол-во: '
  + productAmount[i] + ' шт</div>' + '<div class="shipping-window__item-price">Стоимость: '
  + Number(productPrice[i]) * Number(productAmount[i]) + ' руб</div></div>')
  $('.shipping-window__item-img').append(productImage[i].cloneNode());
  
  let totalPriceWindow = 0;
  for(let itemPriceIndex = 0; itemPriceIndex<productPrice.length; itemPriceIndex++) {
    totalPriceWindow = Number(totalPriceWindow) + (productPrice[itemPriceIndex] * productAmount[itemPriceIndex]);
  }
  $('.bottom-items__price').children('input')[0].value = totalPriceWindow;
});


$('.clear-shipping-window').click(function(e) {
  e.preventDefault();
  $('.shipping-window__items').empty();
  productImage.splice(0,productImage.length)
  productName.splice(0,productName.length)
  productAmount.splice(0,productAmount.length)
  productPrice.splice(0,productPrice.length)
  $('.bottom-items__price').children('input')[0].value = 0;
  $('.bottom-block__total-price')[0].value = 0;
  i = -1;
});
//------------------

