module.exports = {
    config: {
        name: "sorteio",
        aliases: ['giveaways', 'giveaway'],
        description: '',
        category: "Ajuda"
    },
    run: async(client, message, args) => {
        const { MessageEmbed } = require('discord.js')
  const embed = new MessageEmbed()
  .setTitle("** Significa que não Funciona ou tem problemas")
  .setDescription("Categoria Sorteio")
  .addField("Total de Comandos(`4`) :", "`edit**`,`end**`,`reroll**`,`start**`")
  .setFooter(`Solicitado por ${message.author.username}`, message.author.displayAvatarURL({ dynamic: true, size: 2048 }))
  message.channel.send(embed)
    }
}