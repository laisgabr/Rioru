const Command = require('../../Util/Command');

module.exports = class LanguageCommand extends Command {
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