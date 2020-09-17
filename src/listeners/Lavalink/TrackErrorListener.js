const { Listener } = require('../../structure')

module.exports = class TrackErrorListener extends Listener {
  constructor () {
    super({
      name: 'trackError'
    })
  }

  run (player, err) {
    player.textChannel.send(`Não foi possivel carregar ou procurar essa Música devido a: ${err}`)
  }
}
