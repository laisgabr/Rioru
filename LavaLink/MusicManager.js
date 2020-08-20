const { GorilinkManager } = require('gorilink')

module.exports = class MusicManager extends GorilinkManager {
  constructor (client, nodes, options) {
    super(bot, nodes, options)

    this.Player = options.Player
  }
}
