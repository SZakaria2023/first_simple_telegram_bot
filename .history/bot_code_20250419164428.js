//building a telegram bot step by step :
// 🔌 Import the Telegram Bot Library 
const TelegramBot = require('node-telegram-bot-api');

// 🔑 Replace this with your real bot token from BotFather
const token="7874926737:AAHrv0Xpq9rChLHxupCWXuOu4t7QZk9N7Vc";

// 🤖 Create a bot instance and start polling for messages
const Mybot = new TelegramBot(token,{polling : true});

// 📩 Basic message handler - echoes any text the user sends
Mybot.on("message", (msg) =>{
const chatID= msg.chat.id;  // Get chat ID from the incoming message
const txt = msg.text;   // Get text from the incoming message


if (txt === "/start"){
    Mybot.sendMessage(chatID,"welcome to the demo telegram bot");
}
else{Mybot.sendMessage(chatID,`you said : ${txt}`);}
})


