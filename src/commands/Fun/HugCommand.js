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

    if (!uuser) return channel.send('<:xSweet:756989900661850182> | Mencione alguém ou diga um id ou diga um username!')

    superagent.get('https://nekos.life/api/v2/img/hug')
    .end((err, response) => {
    const embed = new Discord.MessageEmbed()
    .setDescription(`${author} deu um abraço em ${uuser}`)
      .setColor('RANDOM')
    .setImage(response.body.url)
    .setFooter(`Solicitado por ${author.username}`, author.displayAvatarURL({ dynamic: true, size: 2048 }))
    channel.send(embed)
    })
    }
}
