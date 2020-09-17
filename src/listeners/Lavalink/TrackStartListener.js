const { Listener } = require('../../structure')

module.exports = class TrackStartListener extends Listener {
  constructor () {
    super({
      name: 'trackStart'
    })
  }

  run (player, track) {
    player.textChannel.send(`Tocando Agora: ${track.info.title}`)
  }
}
