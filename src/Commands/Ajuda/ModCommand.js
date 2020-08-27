module.exports = {
    config: {
        name: "mod",
        aliases: ['moderação'],
        description: '',
        category: "Ajuda"
    },
    run: async(client, message, args) => {
        const { MessageEmbed } = require('discord.js')
  const embed = new MessageEmbed()
  .setTitle("** Significa que não Funciona ou tem problemas")
  .setDescription("Categoria Moderação")
  .addField("Total de Comandos(`5`) :", "`ban`,`kick`,`mute`,`unban`,`unmute`")
  .setFooter(`Solicitado por ${message.author.username}`, message.author.displayAvatarURL({ dynamic: true, size: 2048 }))
  message.channel.send(embed)
    }
}