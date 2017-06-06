
const Discord = require("discord.js");
const client = new Discord.Client();
const config = require('./config.json')
client.on('ready', () => {
  console.log(`Logged in as ${client.user.username}!`);
});

client.on('message', msg => {
  if (msg.content === config.prefix +'ping') {
    msg.reply('Pong!');
  }
    if (msg.content === config.prefix +'!bot') {
    msg.reply(`This Bot Was Made By Bacon_Space And it is made in ${discordjs}`);
    msg.react(":okhand:");
  } //PlaceHolder
});

client.login(`${config.token}`);
