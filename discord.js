//Basic//


const Discord = require('discord.js');
const client = new Discord.Client();
const moment = require("moment")
const fs = require("fs")
const prefix = '#'


//status//


client.on('ready', () => {
   client.user.setGame("help Command");
}); 


//Reply message//


client.on('message', msg => {
  if (msg.content === 'ping') {
    msg.reply('Pong!');
  }
});


//Servers//


client.login(process.env.BOT_TOKEN);
//or//
client.login('token');
