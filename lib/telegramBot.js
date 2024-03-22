const TelegramBot = require('telegram-bot-api');
require('dotenv').config();

const telegramBot = new TelegramBot({
  token: process.env.TELEGRAM_BOT_TOKEN,
});

module.exports = telegramBot;