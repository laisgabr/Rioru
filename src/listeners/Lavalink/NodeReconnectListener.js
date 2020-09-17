const { Listener } = require('../../structure')

module.exports = class NodeReconnectListener extends Listener {
  constructor () {
    super({
      name: 'nodeReconnect'
    })
  }

  run (nodes) {
    console.log(`${nodes.tag || nodes.host} está tentando fazer Reconexão...`)
  }
}
