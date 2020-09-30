const { Command } = require('../../structure')

module.exports = class NightcoreCommand extends Command {
  constructor(client) {
    super(client, {
      name: 'nightcore',
      aliases: [],
      category: 'Music'
    })
  }
  run ({ channel, member, guild, lavalink, args }) {

    const canal  = member.voice.channel;
    if (!canal) return channel.send("<:xSweet:756989900661850182> | Você não está em um canal de voz ou no mesmo que eu!");

    const player = lavalink.players.get(guild.id);
    if (!player) return channel.send("<:xSweet:756989900661850182> | Não tem nada tocando no Servidor!");

    const off = args[0]
    if(!off) return  channel.send("<:xSweet:756989900661850182> | Diga [on/off] para continuar")

    if(!off.includes('off', 'on')) return channel.send('<:xSweet:756989900661850182> | Diga [on/off] para continuar')

    if(off === 'on') {
      player.setEQ(Array(6).fill(0).map((n, i) => ({ band: i, gain: 0.55 })));
      return channel.send(`Filtro Nightcore foi ativado!`);
    }

    if(off === 'off') {
      player.setEQ(Array(6).fill(0).map((n, i) => ({ band: i, gain: 0.0 })));
      return channel.send(`Filto Nightcore foi desativado!`);
    }
  }
}
