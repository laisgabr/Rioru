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

        const off = args[0]
        if(!off) return  channel.send("<:xSweet:756989900661850182> | Diga [on/off] para continuar")

      if(off === 'on') {
        player.setEQ(Array(6).fill(0).map((n, i) => ({ band: i, gain: 1.50 })));
        return channel.send(`Filtro Bassbost foi ativado!`);
      } else if(off === 'off') {
        player.setEQ(Array(6).fill(0).map((n, i) => ({ band: i, gain: 0.0 })));
        return channel.send(`Filto Bassbost foi desativado!`);
      } else {
        return  channel.send("<:xSweet:756989900661850182> | Diga [on/off] para continuar")
      }
      }
}
