const TelegramBot = require('node-telegram-bot-api');
const token="7874926737:AAHrv0Xpq9rChLHxupCWXuOu4t7QZk9N7Vc";
const Mybot = new TelegramBot(token,{polling : true});
Mybot.on("message", (msg) =>{
const chatID= msg.chat.id;
const txt = msg.text;
if (txt === "/start"){
    Mybot.sendMessage(chatID,"welcome to the demo telegram bot");
}
else{Mybot.sendMessage(chatID,"you said : ${txt}");}
})
