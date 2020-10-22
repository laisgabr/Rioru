const Command = require('../../Util/Command');
const emj = require('../../API/connectEmoji');

module.exports = class CoinFlipBetCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'coinflipbet',
            aliases: ['apostarzoins', 'apostar'],
            description: 'Aposte com os amigos, só na broderagem.',
            category: 'Economy'
        })
    }
    run(message, args, t) {
        message.channel.send('Em produção....')
    }
}