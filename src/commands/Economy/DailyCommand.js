const Command = require('../../Util/Command');
const emj = require('../../API/connectEmoji');

module.exports = class DailyCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'daily',
            aliases: ['deily'],
            description: 'Resgate seus sonhos diários',
            category: 'Economy'
        })
    }
    run(message, args, t) {
        message.channel.send('Em produção....')
    }
}