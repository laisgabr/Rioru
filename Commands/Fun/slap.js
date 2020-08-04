module.exports.run = async(bot, message, args) => {
    const Discord = require('discord.js')
    const superagent = require('superagent')

   const uuser = message.mentions.users.first() || bot.users.cache.get(args[0])

   if(!uuser) return message.reply("Mencione alguém por favor")

   if(uuser.id === bot.user.id) {
    superagent.get('https://nekos.life/api/v2/gif/slap')
    .end((err, response) => {
        const embedA = new Discord.MessageEmbed()
        .setTitle(`Yaaaay`)
        .setDescription(`${bot.user} Deu um tapa bem merecido em ${message.author}`)
        .setImage(response.body.message)
        .setFooter(`Solicitado pelo(a) idiota do ${message.author.username}`, message.author.displayAvatarURL({ dynamic: true, size: 2048 }))
        return message.channel.send(embedA)
      })
   }

    superagent.get('https://nekos.life/api/v2/gif/')
    .end((err, response) => {
        const embed = new Discord.MessageEmbed()
        .setTitle(":0")
        .setDescription(`${message.author} Deu um tapa em ${user}`)
        .setImage(response.body.message)
        .setFooter(`Solicitado por ${message.author.username}`, message.author.displayAvatarURL({ dynamic: true, size: 2048 }))
        message.channel.send(embed)
    })
}