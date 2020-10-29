const Command = require('../../Util/Command');

module.exports = class LanguageCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'locale',
            aliases: ['language'],
            description: '',
            category: 'Utils'
        })
    }
    async run(message, args, t) {
        
    }
}