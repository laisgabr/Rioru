module.exports = {
    config: {
        name: "music",
        aliases: ['música'],
        description: '',
        category: "Ajuda"
    },
    run: async(client, message, args) => {
        const { MessageEmbed } = require('discord.js')
  const embed = new MessageEmbed()
  .setTitle("** Significa que não Funciona ou tem problemas")
  .setDescription("Categoria Música")
  .addField("Sistema desativado temporariamente", `Já faz um tempo que o sistema de música ficou desativado por causa do block do YT e assim estou refazendo com LavaLink para nunca mais ser desativado :thumbsup:`)
  .addField("Total de Comandos(`6`) :", "`lyrics`,`nowplaying**`,`play`,`queue**`,`skip**`,`stop**`")
  .setFooter(`Solicitado por ${message.author.username}`, message.author.displayAvatarURL({ dynamic: true, size: 2048 }))
  message.channel.send(embed)
    }
}