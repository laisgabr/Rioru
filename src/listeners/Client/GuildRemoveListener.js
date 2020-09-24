const { Listener } = require('../../structure')

module.exports = class GuildRemoveListener extends Listener {
    constructor () {
        super({
            name: 'guildRemove'
        })
    }
    run () {
        console.log('Em criação....')
    }
}
