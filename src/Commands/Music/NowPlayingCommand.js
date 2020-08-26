const { MessageEmbed } = require("discord.js")

module.exports = {
    config: {
        name: "nowplaying",
        aliases: ['np'],
        description: '',
        category: "Music"
    },
   run: async(client, message, args) => {
    const guild = message.guild
    const channel = message.channel

    const { MessageEmbed } = require('discord.js')

    const { track, state } = message.guild.music

    const embed = new MessageEmbed()
      .setDescription(`**| Tocando agora:** [${track.info.title}](${track.info.uri})
      **| Autor:** \`${track.info.author}\`
      **| Duração:** \`${this.formatTime(state.position)}\` de \`${this.formatTime(track.info.length)}\`
      `)
      .setThumbnail(track.info.thumbnail)
      .setColor(guild.me.displayHexColor)

    channel.send(embed)
   }
}