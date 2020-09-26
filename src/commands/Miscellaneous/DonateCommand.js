/* eslint-disable lines-between-class-members */
/* eslint-disable indent */
const { Command } = require('../../structure')

module.exports = class DonateCommand extends Command {
    constructor (client) {
        super(client, {
            name: 'donate',
            aliases: ['doar'],
            description: 'Doe para o Desenvolvimento do bot',
            usage: '<prefix>donate',
            category: 'Miscellaneous'
        })
    }
    run ({ channel }) {
        channel.send("Pague a host pra me ajudar então..")
    }
}
