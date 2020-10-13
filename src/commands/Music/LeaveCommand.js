const { Command } = require('../../structure')

module.exports = class LeaveCommand extends Command {
    constructor (client) {
        super(client, {
            name: 'leave',
            aliases: ['disconnect'],
            category: 'Music',
            voiceChannelOnly: true
        })
    }
    run ({ lavalink, guild, channel }) {
    lavalink.players.destroy(guild.id);
    channel.send(':sleeping: | Bye bye...').then(msg => msg.react('👋'))
    }
}
