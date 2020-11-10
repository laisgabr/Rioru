const Command = require('../../Util/Command');

module.exports = class ServerInfoCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'serverinfo',
            aliases: ['si'],
            description: 'Mostra informações sobre o Servidor',
            category: 'Miscellaneous'
        })
    }
    run(message, args, t) {
    const { ZoeEmbed } = require('../../Util')
    const moment = require('moment')
    moment.locale("pt-BR")

    const ServerEmb = new ZoeEmbed()
    .addField("📝 Nome do Servidor :", `${message.guild.name}(\`${message.guild.id}\`)`)
    .addField(`<:owner:723567257552420905> Dono do Servidor :`, `${message.guild.owner}(\`${message.guild.owner.id}\`)`)
    .addField("🏳 Região do Servidor :", `\`${message.guild.region}\``)
    .addField("📆 Servidor criado em :", `\`${moment(message.guild.createdAt).format("LLL")}\``)
    .addField("Você entrou aqui em :", `\`${moment(message.member.joinedAt).format("LLL")}\``)
    .addField("Eu entrei aqui em :", `\`${moment(this.client.joinedAt).format("LLL")}\``)
    .addField("👥 Total de Membros do Servidor :", `${message.guild.memberCount}`)
    .setThumbnail(message.guild.iconURL({ dynamic: true }))
    message.channel.send(ServerEmb)
    }
}