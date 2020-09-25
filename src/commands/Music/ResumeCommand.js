const { Command } = require('../../structure')

module.exports = class ResumeCommand extends Command {
    constructor (client) {
        super(client, {
            name: 'resume',
            aliases: [],
            category: 'Music'
        })
    }
    run ({ channel, lavalink, member, guild }) {
        const voiceChannel = member.voice.channel;
        if (!voiceChannel) return channel.send('Você não está num canal de voz')

        const player = lavalink.players.get(guild.id)
        if(!player) return channel.send('Não estou em nenhum canal')

        player.pause(false);
    }
}
