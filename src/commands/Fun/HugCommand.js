const { Command } = require('../../structure')

module.exports = class extends Command {
    constructor (client) {
        super(client, {
            name: 'hug',
            aliases: ['abraçar', 'abracar'],
            category: 'Fun'
        })
    }
    run ({ channel, mentions, author, guild, msg, args }) {
    const Discord = require('discord.js')
    const superagent = require('superagent')

    const uuser = mentions.users.first() || this.client.users.cache.get(args[0]) || guild.members.cache.find(mem => mem.user.username === args.join(' '))

    if (!uuser) return msg.reply('Mencione alguém por favor')

    superagent.get('https://nekos.life/api/v2/img/hug')
    .end((err, response) => {
    const embed = new Discord.MessageEmbed()
    .setDescription(`${author} Abraçou ${uuser} :3 | Own X3`)
    .setImage(response.body.url)
    .setFooter(`Solicitado por ${author.username}`, author.displayAvatarURL({ dynamic: true, size: 2048 }))
    channel.send(embed)
    })
    }
}
