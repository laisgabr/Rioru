const { Listener } = require('../../structure')

module.exports = class NodeErrorListener extends Listener {
  constructor() {
    super({
      name: 'nodeError'
    })
  }
  run(node, err) {
    console.log(`Infelizmente, aconteceu um erro. ${err}`)
  }
}
