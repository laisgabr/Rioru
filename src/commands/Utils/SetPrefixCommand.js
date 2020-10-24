const Command = require('../../Util/Command');

module.exports = class SetPrefixCommand extends Command {
    constructor(client) {
        super(client, {
            name: '',
            aliases: [],
            description: '',
            category: ''
        })
    }
    async run(message, args, t) {
        
    }
}