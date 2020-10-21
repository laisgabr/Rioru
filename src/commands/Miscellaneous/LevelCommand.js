const Command = require('../../Util/Command')

module.exports = class LevelCommand extends Command {
    constructor(client) {
        super(client, {
            name: '',
            aliases: [],
            description: '',
            category: ''
        })
    }
    run(message, args, t) {
        message.channel.send('os dev tá trabalhando nisso')
    }
}