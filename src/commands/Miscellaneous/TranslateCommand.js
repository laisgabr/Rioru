const Command = require('../../Util/Command');
const emj = require('../../API/connectEmoji');

module.exports = class TranslateCommand extends Command {
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