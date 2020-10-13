const { Command } = require('../../structure')

module.exports = class extends Command {
    constructor (client) {
        super(client, {
            name: 'slap',
            aliases: ['tapa'],
            usage: '',
            description: '',
            category: 'Fun'
        })
    }
    run ({ channel, author, guild, msg, args, mentions }) {
        const { MessageEmbed } = require('discord.js')
    const superagent = require('superagent')

   const uuser = mentions.users.first() || this.client.users.cache.get(args[0]) || guild.members.cache.find(mem => mem.user.username === args.join(" "))

   if (!uuser) return channel.send("<:xSweet:756989900661850182> | Mencione alguém ou diga um id ou diga um username!")

   if (uuser.id === this.client.user.id) {
    superagent.get('https://nekos.life/api/v2/img/slap')
    .end((err, response) => {
        const embedA = new MessageEmbed()
        .setDescription(`${this.client.user} Deu um tapa bem merecido em ${author}`)
          .setColor('RANDOM')
        .setImage(response.body.url)
        .setFooter(`Solicitado por ${author.username}`, author.displayAvatarURL({ dynamic: true, size: 2048 }))
        return channel.send(embedA)
      })
   } else {
    superagent.get('https://nekos.life/api/v2/img/slap')
    .end((err, response) => {
        const embed = new MessageEmbed()
        .setDescription(`${author} Deu um tapa em ${uuser}`)
        .setImage(response.body.url)
          .setColor('RANDOM')
        .setFooter(`Solicitado por ${author.username}`, author.displayAvatarURL({ dynamic: true, size: 2048 }))
        channel.send(embed)
    })
   }
    }
}
