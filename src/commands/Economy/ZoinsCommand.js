const Command = require('../../Util/Command');
const emj = require('../../API/connectEmoji');

module.exports = class ZoinsCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'zoins',
            aliases: ['atm', 'bal', 'balance'],
            description: 'Mostra o seu total de Zoins',
            category: 'Economy'
        })
    }
    run(message, args, t) {
        message.channel.send('Em produção....')
    }
}