/* eslint-disable indent */
const { Command } = require('../../structure')

module.exports = class VolumeCommand extends Command {
    constructor (client) {
        super(client, {
            name: 'volume',
            aliases: [],
            category: 'Music',
            voiceChannelOnly: true,
            queueOnly: true
        })
    }
    // eslint-disable-next-line lines-between-class-members
    run ({ channel, args, guild }) {
      /*
      const volume = Number(args[0])

    if (isNaN(volume)) {
      return channel.send(
        ':x:' +
          ' | Você não informou o volume ou valor inserido é inválido.'
      )
    }

    if (volume > 200) {
      return channel.sendTempMessage(
        ':x:' +
          ' | O volume inserido é superior a `200`.'
      )
    }

    const emoji =
      volume > guild.music.state.volume
        ? 'aumentei o Volume pra você'
        : 'Diminui o Volume pra você'
    const state =
      volume > guild.music.state.volume ? 'aumentado para: ' : 'reduzido para: '
    guild.music.volume(volume)
    return channel.send(
      emoji + ' | Volume ' + state + '`' + volume + '`.'
    )
    */
    }
}
