const Command = require('../../Util/Command')

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
        .setDescription(`[Clique Aqui](https://discord.com/api/oauth2/authorize?client_id=${this.client.user.id}&permissions=0&scope=bot) para me Adicionar em seu Lindo Servidor`)
        .setColor("RED")
        .setFooter(`Solicitado por ${message.author.username}`, message.author.displayAvatarURL({ size: 2048, dynamic: true }))

        message.channel.send(EmbedI)
    }
}