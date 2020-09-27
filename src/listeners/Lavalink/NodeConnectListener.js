const { Listener } = require('../../structure')

module.exports = class NodeConnectListener extends Listener {
  constructor() {
    super({
      name: 'nodeConnect'
    })
  }
  run(node) {
    console.log(`${node.options.tag || node.options.host} - Lavalink conectado com Sucesso.`)
  }
}
