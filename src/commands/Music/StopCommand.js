/* eslint-disable lines-between-class-members */
/* eslint-disable indent */
const { Command } = require('../../structure')

module.exports = class StopCommand extends Command {
    constructor (client) {
        super(client, {
            name: 'stop',
            aliases: ['pausar'],
            category: 'Music',
            queueOnly: true,
            voiceChannelOnly: true
        })
    }
    run ({ channel, guild }) {
      /*
      if (guild.music.paused) {
            return channel.send(
              ':x:' + ' | A música já se encontra pausada.'
            )
          }

          guild.music.pause(true)
          return channel.send(
            '⏸️' + ' | Música pausada com sucesso.'
          )
          */
    }
}
