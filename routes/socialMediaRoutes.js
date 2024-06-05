const express = require('express');
const router = express.Router();
const twitterClient = require('../lib/twitterClient');
const telegramBot = require('../lib/telegramBot');

// Post an update to Twitter
router.post('/postToTwitter', async (req, res) => {
  const { content } = req.body;
  try {
    await twitterClient.v2.tweet(content);
    console.log('Tweet posted successfully:', content);
    res.json({ message: 'Tweet posted successfully.' });
  } catch (error) {
    console.error('Error posting to Twitter:', error.toString());
    res.status(500).send(error.message);
  }
});

// Post an update to Telegram
router.post('/postToTelegram', async (req, res) => {
  const { content } = req.body;
  try {
    await telegramBot.sendMessage({
      chat_id: process.env.TELEGRAM_CHANNEL_ID, // INPUT_REQUIRED {Provide your Telegram Channel ID}
      text: content,
    });
    console.log('Message posted to Telegram successfully:', content);
    res.json({ message: 'Message posted to Telegram successfully.' });
  } catch (error) {
    console.error('Error posting to Telegram:', error.toString());
    res.status(500).send(error.message);
  }
});

module.exports = router;