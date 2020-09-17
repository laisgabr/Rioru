const { Listener } = require('../../structure')

module.exports = class TrackErrorListener extends Listener {
  constructor () {
    super({
      name: 'trackError'
    })
  }

  run (player) {
    player.textChannel.send(`Não foi possivel carregar ou procurar essa Música devido ao erro 429 do YouTube ou essa música tem CopyRight`)
  }
}
