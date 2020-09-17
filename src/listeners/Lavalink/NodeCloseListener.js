const { Listener } = require('../../structure')

module.exports = class NodeCloseListener extends Listener {
  constructor () {
    super({
      name: 'nodeClose'
    })
  }

  run (nodes) {
    console.log(`A instancia do Lavalink foi fechada ou você não ligou o Lavalink em outro terminal`)
  }
}
