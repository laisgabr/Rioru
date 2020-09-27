const { Listener } = require('../../structure')

module.exports = class NodeCloseListener extends Listener {
    constructor() {
      super({
        name: 'nodeClose'
      })
    }
    run () {
      console.log(`A instancia do Lavalink foi fechada ou não está ligada`)
    }
}
