const { GorilinkManager } = require('gorilink')

module.exports = class AsunaManager extends GorilinkManager {
  constructor (client, nodes, options) {
    super(client, nodes, options)

    this.Player = options.Player
  }
}
