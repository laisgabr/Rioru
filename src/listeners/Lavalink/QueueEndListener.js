const { Listener } = require('../../structure')

module.exports = class QueueEndListener extends Listener {
  constructor () {
    super({
      name: 'queueEnd'
    })
  }

  async run (player) {
    await player.textChannel.send('⏹ | A fila acabou...')
    await player.end()
  }
}
