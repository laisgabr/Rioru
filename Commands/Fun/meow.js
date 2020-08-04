module.exports.run = async(bot, message, args) => {
    const Discord = require('discord.js')
 const superagent = require('superagent')


 superagent.get('https://nekos.life/api/v2/img/meow')
 .end((err, response) => {
     const embed = new Discord.MessageEmbed()
     .setImage(response.body.url)
     .setFooter(`Solicitado por ${message.author.username}`, message.author.displayAvatarURL({ dynamic: true, size: 2048 }))
     message.channel.send(embed)
 })
}