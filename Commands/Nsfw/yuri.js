module.exports.run = async(bot, message, args) => {
    const Discord = require('discord.js')
 const superagent = require('superagent')

 if (message.channel.nsfw === true) {
 superagent.get('https://nekos.life/api/v2/img/yuri')
 .end((err, response) => {
     const embed = new Discord.MessageEmbed()
     .setImage(response.body.url)
     .setFooter(`Solicitado por ${message.author.username}`, message.author.displayAvatarURL({ dynamic: true, size: 2048 }))
     message.channel.send(embed)
    })
  } else {
      return message.channel.send("Esse canal não é de NSFW +18")
  }
}