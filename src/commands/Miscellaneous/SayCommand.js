const Command = require('../../Util/Command');

module.exports = class SayCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'say',
            aliases: [],
            description: '',
            category: 'Miscellaneous'
        })
    }
    run(message, args, t) {
        
    }
}