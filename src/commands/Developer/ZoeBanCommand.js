const Command = require('../../Util/Command');

module.exports = class ZoeBanCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'zoeban',
            aliases: ['blacklistadd'],
            category: 'Developer'
        })
    }
    run(message, args, t) {
        console.log('a')
    }
}