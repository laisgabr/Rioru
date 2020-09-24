const { Command } = require('../../structure')

module.exports = class PunishmentsCommand extends Command {
    constructor (client) {
        super(client, {
            name: 'punishment',
            category: 'Administration'
        })
    }
    run ({ channel }) {
        channel.send('Em construção......')
    }
}
