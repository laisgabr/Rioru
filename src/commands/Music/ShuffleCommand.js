const { Command } = require('../../structure')

module.exports = class ShuffleCommand extends Command {
  constructor(client) {
    super(client, {
      name: 'shuffle',
      aliases: ['embaralhar'],
      category: 'Music',
      voiceChannelOnly: true,
      playerOnly: true,
      playingOnly: true
    });
  }
  run ({ channel, lavalink, guild }) {
    const player = lavalink.players.get(guild.id)
    
    player.queue.shuffle()
    return channel.send('Embaralhando a Lista de Reprodução!')
  }
}
