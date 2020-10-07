const { Command } = require('../../structure')

module.exports = class extends Command {
    constructor(client) {
        super(client, {
            name: 'addcoins',
            aliases: [],
            category: 'Developer',
            devOnly: true
        })
    }
    run ({ channel }) {
        channel.send('Em criação.........')
    }
}
