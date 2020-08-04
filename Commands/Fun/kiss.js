const Discord = require('discord.js')
const superagent = require('superagent')

module.exports.run = async(bot, message, args) => {
   
    let user = message.mentions.users.first() || bot.users.cache.get(args[0]);
    if (!user) {
        return message.reply("Mencione alguem né :v")
    }
  
    if(user.id === bot.user.id) return message.channel.send("Quero te beijar não")

    superagent.get('https://nekos.life/api/v2/img/kiss')
    .end((err, response) => {
        const embed = new Discord.MessageEmbed()
        .setTitle(`:heart: O amor está no Ar :heart:`)
        .setDescription(`:heart: ${message.author} Beijou ${user} :heart:`)
        .setImage(response.body.message)
        .setFooter(`Solicitado por ${message.author.username}`, message.author.displayAvatarURL({ dynamic: true, size: 2048 }))
        message.channel.send(embed)
    })
}