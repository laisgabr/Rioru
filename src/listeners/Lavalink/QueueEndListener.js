const { Listener } = require('../../structure')

module.exports = class QueueEndListener extends Listener {
  constructor() {
    super({
      name: 'queueEnd'
    })
  }
  run (player) {
    player.textChannel.send('⏹ | A fila acabou...')
  //  player.textChannel.send(':sleeping: | Saindo do canal por Inatividade') 
        
  }
}