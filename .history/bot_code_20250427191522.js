//building a telegram bot step by step :
// 🔌 Import the Telegram Bot Library 
const TelegramBot = require('node-telegram-bot-api');

// 🔑 Replace this with your real bot token from BotFather
const token="7874926737:AAHrv0Xpq9rChLHxupCWXuOu4t7QZk9N7Vc";

// 🤖 Create a bot instance and start polling for messages
const Mybot = new TelegramBot(token,{polling : true});

// 💬 Handle /start command
Mybot.onText(/\/start/, function(msg) {
Mybot.sendMessage(msg.chat.id, 'Welcome! I am your friendly bot.');
});

// 💬 Handle /help command
Mybot.onText(/\/help/, function(msg) {
Mybot.sendMessage(msg.chat.id, 'Here are the things I can do:\n/start - welcome message\n/help - list of commands');
});

// 🔍 React to specific words
Mybot.on('message', function(msg) {
const chatId = msg.chat.id;
const text = msg.text.toLowerCase();

if (text === 'hi' || text === 'hello') {
  Mybot.sendMessage(chatId, 'Hey there! 👋');
} else if (text.includes('weather')) {
  Mybot.sendMessage(chatId, 'Sorry, I don`t know the weather yet 🌦️');
} else if (!text.startsWith('/')) {
  Mybot.sendMessage(chatId, `You said: ${text}`);
}
});

// 🕹️ Inline Keyboard Menu
Mybot.onText(/\/menu/, function(msg) {
  Mybot.sendMessage(msg.chat.id, 'Choose an option:', {
  reply_markup: {
    inline_keyboard: [
      [{ text: 'Option 1', callback_data: 'opt1' }],
      [{ text: 'Option 2', callback_data: 'opt2' }]
    ]
  }
});
});

// 🕹️ Handle button clicks
Mybot.on('callback_query', function(callbackQuery) {
const message = callbackQuery.message;
const data = callbackQuery.data;

if (data === 'opt1') {
  Mybot.sendMessage(message.chat.id, 'You selected Option 1, LOSER hahahah');
} else if (data === 'opt2') {
  Mybot.sendMessage(message.chat.id, 'You selected Option 2, Wrong choise , select option ');
}
});

// 🖼️ Handle photos
Mybot.on('photo', function(msg) {
Mybot.sendMessage(msg.chat.id, 'Nice photo!');
});

// 🖼️ Handle stickers
Mybot.on('sticker', function(msg) {
Mybot.sendMessage(msg.chat.id, 'Cool sticker 😎');
});