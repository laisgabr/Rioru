const { CommandExecuter } = require('../../')

module.exports = class MessageCreateListener extends Listener {
    constructor(client) {
        super(client, {
            name: 'messageCreate'
        })
    }
    
    async run(msg) {
        new CommandExecuter(this.client, msg)
    }
}