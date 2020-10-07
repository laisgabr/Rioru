const { Command } = require('../../structure')

module.exports = class PayCommand extends Command {
    constructor (client) {
        super(client, {
            name: 'pay',
            aliases: [],
            category: 'Economy'
        })
    }
    run ({ channel }) {
        channel.send('Em breve.......')
    }
}
