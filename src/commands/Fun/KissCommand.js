const { Command } = require('../../structure')

module.exports = class extends Command {
    constructor (client) {
        super(client, {
            name: 'kiss',
            aliases: ['beijar'],
            category: 'Fun'
        })
    }
    run ({ channel, args, msg, mentions, author, guild }) {
        const superagent = require('superagent')
        const Discord = require('discord.js')
        var uuser = mentions.users.first() || this.client.users.cache.get(args[0]) || guild.members.cache.find(mem => mem.user.username === args.join(" "))
        if (!uuser) {
            return channel.send("<:xSweet:756989900661850182> | Mencione alguém ou diga um id ou diga um username!")
        }

        if (uuser.id === this.client.user.id) return msg.reply("Quero te beijar nah")

        superagent.get('https://nekos.life/api/v2/img/kiss')
        .end((err, response) => {
            const embed = new Discord.MessageEmbed()
            .setTitle(`:heart: O amor está no Ar :heart:`)
            .setDescription(`:heart: ${author} Beijou ${uuser} :heart:`)
            .setImage(response.body.url)
              .setColor('RANDOM')
            .setFooter(`Solicitado por ${author.username}`, author.displayAvatarURL({ dynamic: true, size: 2048 }))
            channel.send(embed)
        })
    }
}
