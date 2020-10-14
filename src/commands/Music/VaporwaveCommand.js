const { Command } = require('../../structure')
const { ZoePlayer } = require('../../Music')
const customPlayer = new ZoePlayer()

module.exports = class VaporwaveCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'vaporwave',
            aliases: [],
            category: 'Music',
            voiceChannelOnly: true,
            playerOnly: true,
            playingOnly: true
        })
    }
    run ({ channel }) {
        channel.send('Em construção.....')
    }
}
