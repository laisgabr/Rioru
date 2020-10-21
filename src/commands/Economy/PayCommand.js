const Command = require('../../Util/Command')

module.exports = class PayCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'pay',
            aliases: ['pagar'],
            description: 'Lembra daquele amigo que te pagou seu chiclete ? Retribua ele',
            category: 'Economy'
        })
    }
    run(message, args, t) {
        message.channel.send('Em produção....')
    }
}