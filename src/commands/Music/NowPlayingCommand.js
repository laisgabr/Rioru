/* eslint-disable indent */
/* eslint-disable padded-blocks */
const { Command } = require('../../structure')

module.exports = class PlayCommand extends Command {
  constructor (client) {
    super(client, {
      name: 'nowplaying',
      aliases: ['np'],
      category: 'Music',
      queueOnly: true
    })
  }
// eslint-disable-next-line lines-between-class-members
run ({ channel, guild }) {

 const { track, state } = this.guild.music

    const embed = this.embed()
      .setDescription(`
         **| Tocando agora:** [${
          track.info.title
        }](${track.info.uri})
       **| Autor:** \`${track.info.author}\`
       **| Duração:** \`${this.formatTime(
          state.position
        )}\` de \`${this.formatTime(track.info.length)}\`
      `
      )
      .setThumbnail(track.info.thumbnail)
      .setColor(guild.me.displayHexColor)

    channel.send(embed)
       }
}
