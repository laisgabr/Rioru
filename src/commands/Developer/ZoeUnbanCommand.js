const Command = require('../../Util/Command');

module.exports = class ZoeUnbanCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'zoeunban',
            aliases: ['blacklistremove'],
            category: 'Developer'
        })
    }
    run(message, args, t) {
        console.log('a')
    }
}