const { Command } = require('../../structure')

module.exports = class extends Command {
    constructor (client) {
        super(client, {
            name: 'bassboost',
            aliases: [],
            category: 'Music'
        })
    }
    run ({ lavalink, channel, member, guild, args }) {
        const levels = {
            none: 0.0,
            low: 0.10,
            medium: 0.15,
            high: 0.25,
            };

            const canal  = member.voice.channel;
            if (!canal) return channel.send("Você não está num canal de voz");

            const player = lavalink.players.get(guild.id);
            if (!player) return channel.send("Não tem nada tocando");
            
             player.setEQ(Array(6).fill(0).map((n, i) => ({ band: i, gain: 0.25 })));

            return channel.send(`Bassbost ativado!`);
    }
}
