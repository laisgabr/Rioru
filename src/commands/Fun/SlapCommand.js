const Command = require('../../Util/Command');

module.exports = class SlapCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'slap',
            aliases: [],
            description: '',
            category: ''
        })
    }
    run(message, args, t) {
        console.log('a')
    }
}