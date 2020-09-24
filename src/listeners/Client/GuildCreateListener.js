const { Listener } = require('../../structure')

module.exports = class GuildCreateListener extends Listener {
    constructor () {
        super({
            name: 'guildCreate'
        })
    }
    run (guild) {
        console.log('Em criação....')
    }
}
