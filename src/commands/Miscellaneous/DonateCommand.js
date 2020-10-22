const Command = require('../../Util/Command');
const emj = require('../../API/connectEmoji');

module.exports = class DonateCommand extends Command {
    constructor (client) {
        super(client, {
            name: 'donate',
            aliases: ['doar'],
            description: 'Doe para o Desenvolvimento da Zoe',
            category: 'Miscellaneous'
        })
    }
    run(message, args, t) {
        message.channel.send(t('commands:Donate.message'))
    }
}
