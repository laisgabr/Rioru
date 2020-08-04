const Discord = require('discord.js');
const superagent = require('superagent')

module.exports.run = (bot, message, args) => {
  if (message.channel.nsfw === true) {
    superagent.get('https://nekobot.xyz/api/image')
    .query({ type: '4k'})
    .end((err, response) => {
        message.channel.send("Aqui está" + { file: response.body.message });
    });
  } else {
    msg.channel.send("Esse canal não é de NSFW +18")
  }
};