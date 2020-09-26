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
        if (!voiceChannel) return channel.send('<:xSweet:756989900661850182> | Você não está em um canal de voz ou no mesmo que eu!')

        const player = lavalink.players.get(guild.id)
        if(!player) return channel.send('<:xSweet:756989900661850182> | Não tem nada tocando nesse Servidor')

        player.pause(false);
    }
}
