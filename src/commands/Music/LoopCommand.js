/* eslint-disable indent */
const { Command } = require('../../structure')

module.exports = class LoopCommand extends Command {
    constructor (client) {
        super(client, {
            name: 'loop',
            aliases: [],
            voiceChannelOnly: true,
            queueOnly: true
        })
    }
    // eslint-disable-next-line lines-between-class-members
    run ({ channel, guild, args }) {
    const track = this.guild.music.track
    switch (args[0]) {
      case 'single': {
        guild.music.loop(guild.music.looped === 0 ? 1 : 0)
        channel.send(
          ` | Loop na música \`${
            track.info.title
          }\` foi \`${
            guild.music.looped === 1 ? 'ativado' : 'desativado'
          }\` com sucesso.`,
          5000
        )
        break
      }
      case 'all': {
        this.guild.music.loop(this.guild.music.looped === 0 ? 2 : 0)
        channel.send(` | Loop na fila foi \`${
            guild.music.looped === 2 ? 'ativado' : 'desativado'
          }\` com sucesso.`,
          5000
        )
        break
      }
      default: {
        channel.send(
          ':x:' +
            ' | Você não informou o tipo de loop. `<single/all>`'
        )
      }
    }
  }
}
