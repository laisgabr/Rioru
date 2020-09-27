const { Listener } = require('../../structure')

module.exports = class TrackErrorListener extends Listener {
  constructor() {
    super({
      name: 'trackError'
    })
  }
  run({ textChannel }, { title }) {
    textChannel.send('Ocorreu um erro ao carregar ' + title)
  }
}
