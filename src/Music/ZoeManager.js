const { Manager } = require('erela.js')

module.exports = class ZoeManager extends Manager {
    constructor(client, nodes, options = {}) {
        if(!client) throw new Error('You need pass the client in Manager')
        if(!nodes) throw new Error('You need pass the Lavalink Nodes')
        if(!options) throw new Error('You need pass the config options')

        super(client, nodes, options)
    }
}