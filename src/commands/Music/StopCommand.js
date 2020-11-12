const Command = require('../../Util/Command');

module.exports = class StopCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'stop',
            aliases: ['parar'],
            description: 'Música ficou meio chata ? Pare ela',
            category: 'Music'
        })
    }
    run(message, args, t) {
        
    }
}