const { Listener } = require('../../structure')

module.exports = class TrackErrorListener extends Listener {
  constructor() {
    super({
      name: 'trackError'
    })
  }
  run({ textChannel }) {
    textChannel.send("Eu acho que essa música tem copyright ou de alguma forma eu fui banida mas é meio impossível.")
  }
}
