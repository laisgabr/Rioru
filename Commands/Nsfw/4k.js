const Discord = require('discord.js');
const superagent = require('superagent')

module.exports.run = (bot, message, args) => {
  if (message.channel.nsfw === true) {
    superagent.get('https://nekobot.xyz/api/image')
    .query({ type: '4k'})
    .end((err, response) => {
        const embed = new Discord.MessageEmbed()
        .setImage(response.body.message)
        .setFooter(`Solicitado por ${message.author.username}`, message.author.displayAvatarURL({ dynamic: true, size: 2048 }))
        message.channel.send(embed);
    });
  } else {
    message.channel.send("Esse canal não é de NSFW +18")
  }
       
};