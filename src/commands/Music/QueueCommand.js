/* eslint-disable no-trailing-spaces */
/* eslint-disable indent */
const { Command } = require('../../structure')

module.exports = class QueueCommand extends Command {
    constructor (client) {
        super(client, {
            name: 'queue',
            aliases: ['q'],
            voiceChannelOnly: true
        })
    }
   // eslint-disable-next-line lines-between-class-members
   async run ({ channel, guild, author }) {
    channel.send('Desativado.......')
    }
}
