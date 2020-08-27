module.exports = {
    config: {
        name: "economia",
        aliases: ['economy'],
        description: '',
        category: "Ajuda"
    },
    run: async(client, message, args) => {
        const { MessageEmbed } = require('discord.js')
  const embed = new MessageEmbed()
  .setTitle("** Significa que não Funciona ou tem problemas")
  .setDescription("Categoria Economia")
  .addField("Total de Comandos(`3`) :", "`coins**`,`daily**`,`pay**`")
  .setFooter(`Solicitado por ${message.author.username}`, message.author.displayAvatarURL({ dynamic: true, size: 2048 }))
  message.channel.send(embed)
    }
}