const { Listener } = require('../../structure')

module.exports = class NodeReconnectListener extends Listener {
  constructor() {
    super({
      name: 'nodeReconnect'
    })
  }
  run(node) {
    console.log(`${node.options.tag || node.options.host} está tentando fazer Reconexão com o Servidor do Lavalink...`)
  }
}
