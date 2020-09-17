/* eslint-disable lines-between-class-members */
/* eslint-disable no-trailing-spaces */
/* eslint-disable indent */
const { Command } = require('../../structure')

module.exports = class extends Command {
    constructor (client) {
        super(client, {
            name: 'headpat',
            aliases: ['pat', 'cafune', 'cafuné'],
            usage: '<prefix>',
            description: '',
            category: 'Fun'
        })
    }
    run ({ channel, msg, mentions, guild, args, author }) {
        const Discord = require('discord.js')
    const superagent = require('superagent')

   const uuser = mentions.users.first() || this.client.users.cache.get(args[0]) || guild.members.cache.find(mem => mem.user.username === args.join(' '))

   if (!uuser) return msg.reply('Mencione alguém por favor')

    superagent.get('https://nekos.life/api/v2/img/pat')
    // eslint-disable-next-line handle-callback-err
    .end((err, response) => {
        const embed = new Discord.MessageEmbed()
        .setDescription(`${author} fez um Cafuné em ${uuser}`)
        .setImage(response.body.url)
        .setFooter(`Solicitado por ${author.username}`, author.displayAvatarURL({ dynamic: true, size: 2048 }))
        channel.send(embed)
    })
  }
}
