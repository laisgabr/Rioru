
const { Command } = require("../../structure")

module.exports = class InviteCommand extends Command {
    constructor (client) {
        super(client, {
            name: 'invite',
            aliases: ['convite'],
            description: 'Mostra o meu convite :D',
            usage: '<prefix>invite',
            category: 'Miscellaneous'
        })
    }
    run ({ channel, client, author }) {
        const Discord = require('discord.js')

        const EmbedI = new Discord.MessageEmbed()
        .setDescription(`[Clique Aqui](https://discord.com/api/oauth2/authorize?client_id=${client.user.id}&permissions=8&scope=bot) para me Adicionar em seu Servidor`)
        .setColor("RED")
        .setFooter(`Solicitado por ${author.username}`, author.displayAvatarURL({ size: 2048, dynamic: true }))

        channel.send(EmbedI)
    }
}
