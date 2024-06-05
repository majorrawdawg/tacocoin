const Discord = require('discord.js');
const client = new Discord.Client();
require('dotenv').config();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === '!ping') {
    msg.reply('Pong!');
    console.log('Ping command received and responded with Pong!');
  }
  // Implement additional commands as needed
});

client.login(process.env.DISCORD_BOT_TOKEN); // INPUT_REQUIRED {Provide your Discord Bot Token in the .env file}