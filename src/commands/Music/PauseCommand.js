const { Command } = require('../../structure')

module.exports = class StopCommand extends Command {
    constructor (client) {
        super(client, {
            name: 'stop',
            aliases: ['pausar', 'pause'],
            category: 'Music',
            playingOnly: true,
            voiceChannelOnly: true,
            playerOnly: true
        })
    }
    run ({ channel, guild, lavalink }) {
    const player = lavalink.players.get(guild.id)
      
    player.pause(true);
    return channel.send('⏸️ | Pausado');
    }
}
