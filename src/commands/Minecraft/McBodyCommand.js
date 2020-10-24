const Command = require('../../Util/Command');

module.exports = class McBodyCommand extends Command {
    constructor(client) {
        super(client, {
            name: '',
            aliases: [],
            description: '',
            category: ''
        })
    }
    run(message, args, t) {
        
    }
}