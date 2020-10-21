module.exports = class NodeConnectEvent {
    constructor (client) {
        this.client = client
    }

    run(node) {
        const chalk = require('chalk')

        console.log(' | ' + chalk.rgb(94, 209, 113).bold("[ LAVALINK NODES ]  ") + node.options.tag + " - Lavalink Node Connected with sucess")
    }
} 