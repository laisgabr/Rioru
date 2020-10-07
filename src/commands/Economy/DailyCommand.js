const { Command } = require('../../structure')

module.exports = class DailyCommand extends Command {
    constructor (client) {
        super(client, {
            name: 'daily',
            aliases: [],
            category: 'Economy'
        })
    }
    run ({ channel }) {
        channel.send('Em breve.......')
    }
}
