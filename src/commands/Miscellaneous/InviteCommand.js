const Command = require('../../Util/Command');

module.exports = class InviteCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'invite',
            aliases: ['convite'],
            description: 'Mostra o meu convite',
            category: 'Miscellaneous'
        })
    }
    run(message, args, t) {
        const { MessageEmbed } = require('discord.js')

        const EmbedI = new MessageEmbed()
        .setDescription(`[Click Here](https://discord.com/api/oauth2/authorize?client_id=${this.client.user.id}&permissions=0&scope=bot)`)
        .setColor("RANDOM")
        .setFooter(message.author.username, message.author.displayAvatarURL({ size: 2048, dynamic: true }))

        message.channel.send(EmbedI)
    }
}