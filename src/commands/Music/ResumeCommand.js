const { Command } = require('../../structure')

module.exports = class ResumeCommand extends Command {
    constructor (client) {
        super(client, {
            name: 'resume',
            aliases: [],
            category: 'Music',
            voiceChannelOnly: true,
            playerOnly: true
        })
    }
    run ({ channel, lavalink, guild }) {
        const player = lavalink.players.get(guild.id)
        player.pause(false);
    }
}
