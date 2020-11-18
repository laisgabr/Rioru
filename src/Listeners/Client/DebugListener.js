const { Listener } = require('../../')

module.exports = class DebugListener extends Listener {
    constructor(client) {
        super(client, {
            name: 'debug'
        })
    }

    run() {
        console.log
    }
}