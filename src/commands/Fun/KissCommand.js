const Command = require('../../Util/Command')

module.exports = class KissCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'kiss',
            aliases: [],
            description: '',
            category: ''
        })
    }
    run(message, args, t) {
        console.log('a')
    }
}