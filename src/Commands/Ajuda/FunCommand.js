module.exports = {
    config: {
        name: "fun",
        aliases: ['diversão'],
        description: '',
        category: "Ajuda"
    },
    run: async(client, message, args) => {
        const { MessageEmbed } = require('discord.js')
  const embed = new MessageEmbed()
  .setDescription("Categoria Diversão")
  .addField("Total de Comandos(`6`) :", "`hug`,`kiss`,`meow`,`pat`,`primeiraspalavras`,`slap`")
  .setFooter(`Solicitado por ${message.author.username}`, message.author.displayAvatarURL({ dynamic: true, size: 2048 }))
  message.channel.send(embed)
    }
}