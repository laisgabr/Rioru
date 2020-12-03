const { Manager } = require('erela.js')

module.exports = class ZoeManager extends Manager {
    constructor(client, options = {}) {
        if(!client) throw new Error('You need pass the client in Manager')
        if(!options) throw new Error('You need pass the config options')

        super(client, options)
    }
}