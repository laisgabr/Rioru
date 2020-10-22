const Command = require('../../Util/Command');
const emj = require('../../API/connectEmoji');

module.exports = class HugCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'hug',
            aliases: ['abracar', 'abraçar', 'abraço'],
            description: 'Dê um Abraço no(a) seu(ua) amigo(a)',
            category: 'Fun'
        })
    }
    run(message, args, t) {
        console.log('a')
    }
}