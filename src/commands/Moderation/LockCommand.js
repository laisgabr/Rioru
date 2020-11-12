const Command = require('../../Util/Command');

module.exports = class LockCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'lock',
            aliases: ['trancar'],
            description: 'Todo Hyped e cheio de fãs revoltados no chat ? Tranque ele',
            category: 'Moderation'
        })
    }
    run(message, args, t) {
        
    }
}