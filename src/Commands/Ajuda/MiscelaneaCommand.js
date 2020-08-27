module.exports = {
    config: {
        name: "misc",
        aliases: ['miscelanea'],
        description: '',
        category: "Ajuda"
    },
    run: async(client, message, args) => {
        const { MessageEmbed } = require('discord.js')
  const embed = new MessageEmbed()
  .setTitle("** Significa que não Funciona ou tem problemas")
  .setDescription("Categoria Miscelanea")
  .addField("Total de Comandos(`12`) :", "`ajuda`,`avatar`,`djs`,`donate**`,`invite`,`ping`,`say`,`serverinfo`,`setNick`,`steam**`,`uptime`,`userinfo`")
  .setFooter(`Solicitado por ${message.author.username}`, message.author.displayAvatarURL({ dynamic: true, size: 2048 }))
  message.channel.send(embed)
    }
}