const { Listener } = require('../../structure')

module.exports = class NodeCloseListener extends Listener {
    constructor() {
      super({
        name: 'nodeClose'
      })
    }
    run () {
      console.log(`A instância do PalmeirasSemMundial foi fechada`)
    }
}
