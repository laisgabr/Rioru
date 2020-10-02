const { Command } = require('../../structure')

module.exports = class ServerinfoCommand extends Command {
    constructor (client) {
        super(client, {
            name: 'serverinfo',
            aliases: ['si'],
            description: 'Mostra informações do Servidor atual',
            usage: '<prefix>serverinfo',
            category: 'Miscellaneous'
        })
    }
    run ({ channel, author, guild, member, client }) {
        const { MessageEmbed } = require('discord.js')
    const moment = require('moment')
    moment.locale("pt-BR")

    const ServerEmb = new MessageEmbed()
    .setTitle(`Informações sobre ${guild.name}`)
    .setColor("RED")
    .addField("📝 Nome do Servidor :", `${guild.name}(\`${guild.id}\`)`)
    .addField(`<:owner:723567257552420905> Dono do Servidor :`, `${guild.owner}(\`${guild.owner.id}\`)`)
    .addField("🏳 Região do Servidor :", `\`${guild.region}\``)
    .addField("📆 Servidor criado em :", `\`${moment(guild.createdAt).format("LLL")}\``)
    .addField("Você entrou aqui em :", `\`${moment(member.joinedAt).format("LLL")}\``)
    .addField("Eu entrei aqui em :", `\`${moment(this.client.joinedAt).format("LLL")}\``)
    .addField("👥 Total de Membros do Servidor :", `${guild.memberCount}`)
    .setThumbnail(guild.iconURL({ dynamic: true }), true)
    .setTimestamp()
    .setFooter(`Solicitado por ${author.username}`, author.displayAvatarURL({ dynamic: true, size: 2048 }))
    channel.send(ServerEmb)
    }
}
