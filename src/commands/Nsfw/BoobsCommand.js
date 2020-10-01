const { Command } = require('../../structure')

module.exports = class extends Command {
    constructor (client) {
        super(client, {
            name: 'boobs',
            aliases: [],
            category: 'NSFW +18'
        })
    }
    run ({ channel, author }) {
        const Discord = require('discord.js')
  const superagent = require('superagent')

 if (channel.nsfw === true) {
 superagent.get('https://love-you.xyz/api/v2/boobs')
 .end((err, response) => {
     const embed = new Discord.MessageEmbed()
     .setDescription(`Não consegue ver? [Clique aqui](${response.body.url})`)
       .setColor('RANDOM')
     .setImage(response.body.url)
       .setThumbnail(author.displayAvatarURL({ dynamic: true }))
     .setFooter(`Solicitado por ${author.username}`, author.displayAvatarURL({ dynamic: true, size: 2048 }))
     channel.send(embed)
    })
   } else {
       // eslint-disable-next-line quotes
   channel.send(`Por favor, Faça os passos do Gif caso queira usar esse comando!`,{ files: [{ attachment: './Assets/NSFW.gif', name: 'NotSafeForWork.gif' }] })
   }
    }
}
