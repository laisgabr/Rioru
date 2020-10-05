const { Listener } = require('../../structure')

module.exports = class QueueEndListener extends Listener {
  constructor() {
    super({
      name: 'queueEnd'
    })
  }
  run (player) {
    player.textChannel.send('⏹ | A fila acabou...')
      setTimeout(function () {
        if(!player.playing) { 
          player.textChannel.send(':sleeping: | Saindo do canal por Inatividade') 
          this.client.lavalink.players.destroy(player.guild.id)
        }
      }, 1300 * 60 )
  }
}