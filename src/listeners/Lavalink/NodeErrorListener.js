const { Listener } = require('../../structure')

module.exports = class NodeErrorListener extends Listener {
  constructor () {
    super({
      name: 'nodeError'
    })
  }

  run (nodes, err) {
    console.log(`Deu erro no node: ${nodes.tag || nodes.host} - Erro: ${err}`)
  }
}
