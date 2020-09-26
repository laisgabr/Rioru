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

            const canal  = member.voice.channel;
            if (!canal) return channel.send("<:xSweet:756989900661850182> | Você não está em um canal de voz ou no mesmo que eu!");

            const player = lavalink.players.get(guild.id);
            if (!player) return channel.send("<:xSweet:756989900661850182> | Não tem nada tocando no Servidor!");

             player.setEQ(Array(6).fill(0).map((n, i) => ({ band: i, gain: 0.25 })));

            return channel.send(`Bassbost ativado!`);
    }
}
