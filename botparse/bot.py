import telebot
from telebot import types
import config
import requests
from bs4 import BeautifulSoup as BS

bot = telebot.TeleBot(config.TOKEN)

@bot.message_handler(commands=['start'])
def welcomeBot(message):
    bot.reply_to(message, 'Привет, {0.first_name}'.format(message.from_user, bot.get_me()))

    welSti = open('temp/AnimatedSticker.tgs', 'rb')
    bot.send_sticker(message.chat.id, welSti)

    buttons = types.ReplyKeyboardMarkup(resize_keyboard=True)
    button1 = types.KeyboardButton("Курс доллара")
    button2 = types.KeyboardButton("Курс евро")
    buttons.add(button1, button2)

    bot.send_message(message.chat.id, "Меня зовут {1.first_name}\nЯ могу показать тебе курс доллара или евро в настоящий момент\nНажимай на кнопки снизу!".format(message.from_user, bot.get_me()), parse_mode='html', reply_markup=buttons)

@bot.message_handler(content_types=['text'])
def course(message):
    #курс доллара
    DOLLAR_RUB = 'https://www.google.com/search?sxsrf=ALeKk01NWm6viYijAo3HXYOEQUyDEDtFEw%3A1584716087546&source=hp&ei=N9l0XtDXHs716QTcuaXoAg&q=%D0%B4%D0%BE%D0%BB%D0%BB%D0%B0%D1%80+%D0%BA+%D1%80%D1%83%D0%B1%D0%BB%D1%8E&oq=%D0%B4%D0%BE%D0%BB%D0%BB%D0%B0%D1%80+&gs_l=psy-ab.3.0.35i39i70i258j0i131l4j0j0i131l4.3044.4178..5294...1.0..0.83.544.7......0....1..gws-wiz.......35i39.5QL6Ev1Kfk4'
    headers_dol = {'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_3) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.149 Safari/537.36'}
    full_page_dol = requests.get(DOLLAR_RUB, headers=headers_dol)
    soup_dol = BS(full_page_dol.content, 'html.parser')
    dollar = soup_dol.findAll("span", {"class": "DFlfde", "class": "SwHCTb", "data-precision": 2})[0].text
    #курс евро
    EURO_RUB = 'https://www.google.com/search?sxsrf=ALeKk03z_7pGXC5lzk0cSpPTxJCTIGMP-A%3A1604179282315&ei=UtWdX7LqEt-MwPAPn5iU8A8&q=%D0%BA%D1%83%D1%80%D1%81+%D0%B5%D0%B2%D1%80%D0%BE&oq=%D0%BA%D1%83%D1%80%D1%81+%D0%B5%D0%B2%D1%80%D0%BE&gs_lcp=CgZwc3ktYWIQAzIJCCMQJxBGEIICMgUIABCxAzIFCAAQsQMyBQgAELEDMgIIADIFCAAQsQMyBQgAELEDMgUIABCxAzIFCAAQsQMyBQgAELEDOgcIIxDqAhAnOgQIIxAnOggIABCxAxCDAToECAAQQzoKCAAQsQMQgwEQQzoHCAAQsQMQQzoKCAAQsQMQFBCHAlCKkAFYmJ8BYPKgAWgBcAB4AIAB4QGIAZYHkgEFNy4xLjGYAQCgAQGqAQdnd3Mtd2l6sAEKwAEB&sclient=psy-ab&ved=0ahUKEwiy25zC4d_sAhVfBhAIHR8MBf4Q4dUDCA0&uact=5'
    headers_eur = {'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_3) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.149 Safari/537.36'}
    full_page_eur = requests.get(EURO_RUB, headers=headers_eur)
    soup_dol = BS(full_page_eur.content, 'html.parser')
    euro = soup_dol.findAll("span", {"class": "DFlfde", "class": "SwHCTb", "data-precision": 2})[0].text

    if message.text == 'Курс доллара':
        bot.send_message(message.chat.id, 'Курс доллара в настоящий момент = ' + dollar + ' руб за доллар')
    elif message.text == 'Курс евро':
        bot.send_message(message.chat.id, 'Курс евро на данный момент = ' + euro + ' руб за евро')

bot.polling()
