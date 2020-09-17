const { Listener } = require('../../structure')

module.exports = class NodeConnectListener extends Listener {
  constructor () {
    super({
      name: 'nodeConnect'
    })
  }

  run (nodes) {
    console.log(`${nodes.tag || nodes.host} - Lavalink conectado com Sucesso.`)
  }
}
