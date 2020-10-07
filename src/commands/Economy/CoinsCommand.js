const { Command } = require('../../structure')

module.exports = class CoinsCommand extends Command {
    constructor (client) {
        super(client, {
            name: 'coins',
            aliases: [],
            category: 'Economy'
        })
    }
    run ({ channel }) {
        channel.send('Em breve.......')
    }
}
