const Discord = require('discord.js')
const db = require('quick.db')

module.exports.run = async(bot, message, args) => {
   const uuser = message.mentions.users.first() || bot.users.cache.get(args[0]) || message.author
   let dinhelo = db.fetch(`dinhelo_${uuser.id}`)
   let avatar = uuser.displayAvatarURL({ dynamic: true, size: 2048 })

   if (dinhelo === null) dinhelo = 0

   const embedDinhelo = new Discord.MessageEmbed()
   .setTitle(`${message.author.username}`)
   .addField(`${uuser.username} tem o Total de : `, `${dinhelo} Moedas Estrelares`)
   .setThumbnail(avatar)
   .setFooter(`Solicitado por ${message.author.username}`, message.author.displayAvatarURL({ dynamic: true, size: 2048 }))
    message.channel.send(embedDinhelo)

}