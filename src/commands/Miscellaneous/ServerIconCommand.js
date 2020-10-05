const { Command } = require('../../structure')

module.exports = class ServerIconCommand extends Command {
    constructor (client) {
        super(client, {
            name: 'servericon',
            aliases: ['servericone'],
            category: 'Miscellaneous'
        })
    }
    run ({ channel, guild, author }) {
        const { MessageEmbed } = require('discord.js')

        const icon = guild.iconURL({ dynamic: true, size: 4096 })

        const embed = new MessageEmbed()
        .setDescription(`:frame_photo: | Icone de [${guild.name}](${icon})`)
        .setImage(icon)
        .setColor('RANDOM')
        .setFooter(`Solicitado por ${author.username}`, author.displayAvatarURL({ dynamic: true, size: 2048 }))
        channel.send(embed)
    }
}
