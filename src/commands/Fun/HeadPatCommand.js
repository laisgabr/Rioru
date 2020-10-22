const Command = require('../../Util/Command');
const emj = require('../../API/connectEmoji');

module.exports = class HeadPatCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'headpat',
            aliases: ['pat', 'cafuné', 'cafune'],
            description: 'Faça um cafuné no seu amigo',
            category: 'Fun'
        })
    }
    run(message, args, t) {
        console.log('a')
    }
}