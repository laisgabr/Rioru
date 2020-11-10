const Command = require('../../Util/Command');

module.exports = class MarryCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'marry',
            aliases: [],
            description: '',
            category: ''
        })
    }
    run(message, args, t) {
        
    }
}