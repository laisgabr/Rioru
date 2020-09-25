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
            if (!player || !player.queue[0]) return channel.send("Não tem nada tocando");
        
            let level = "none";
            if (args.length && args[0].toLowerCase() in levels) level = args[0].toLowerCase();
        
            player.setEQ(...new Array(3).fill(null).map((_, i) => ({ band: i, gain: levels[level] })));
        
            return channel.send(`Nivel do bassboost agora é de ${level}`);
    }
}
