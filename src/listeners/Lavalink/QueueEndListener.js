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
         // this.lavalink.players.destroy(player.guild.id).catch(err => console.log(err))
          this.lavalink.players.destroy(player.guild.id).catch(err => console.log(err))
        }
      }, 1300 * 60 )
  }
}