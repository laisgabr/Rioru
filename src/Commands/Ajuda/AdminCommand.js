module.exports = {
    config: {
        name: "admin",
        aliases: ['administração'],
        description: '',
        category: "Ajuda"
    },
    run: async(client, message, args) => {
    const { MessageEmbed } = require('discord.js')
    const embed = new MessageEmbed()
    .setTitle("** Significa que não Funciona ou tem problemas")
    .setDescription("Categoria Administração")
    .addField("Total de Comandos(`3`) :", "`clear`,`lock`,`unlock`")
    .setFooter(`Solicitado por ${message.author.username}`, message.author.displayAvatarURL({ dynamic: true, size: 2048 }))
    message.channel.send(embed)
    }
}