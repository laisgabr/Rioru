const { Listener } = require('../../structure')

module.exports = class QueueEndListener extends Listener {
  constructor() {
    super({
      name: 'queueEnd'
    })
  }
  run(player) {
    player.textChannel.send('⏹ | A fila acabou...')
    setTimeout(function() {
      if (!player.playing) {
        player.textChannel.send(':sleeping: | Saindo por causa da Inatividade....')
        this.lavalink.players.destroy(player.guild.id)
      }
      return;
    }, 60000 * 2)
  }
}
