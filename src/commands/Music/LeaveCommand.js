const { Command } = require('../../structure')

module.exports = class LeaveCommand extends Command {
    constructor (client) {
        super(client, {
            name: 'leave',
            aliases: ['disconnect'],
            category: 'Music'
        })
    }
    run ({ lavalink, guild, msg, channel, member }) {
    if (!member.voice.channel) return channel.send(':x: | Você precisa estar em um canal de voz ou no mesmo que eu.')
    lavalink.players.destroy(guild.id);
    msg.react('👋')
    }
}