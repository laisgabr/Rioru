const { Listener } = require('../../structure')

module.exports = class TrackEndListener extends Listener {
  constructor () {
    super({
      name: 'trackEnd'
    })
  }

  run (player) {
    player.volume(100)

    player.bassboost(false)
    player.nightcore(false)
  }
}
