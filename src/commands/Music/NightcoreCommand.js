const { Command } = require('../../structure')

module.exports = class NightcoreCommand extends Command {
  constructor(client) {
    super(client, {
      name: 'nightcore',
      aliases: [],
      category: 'Music',
      voiceChannelOnly: true,
      playerOnly: true,
      playingOnly: true
    })
  }
  run ({ channel, member, guild, lavalink, args }) {
    const player = lavalink.players.get(guild.id);

    const off = args[0]
    if(!off) return  channel.send("<:xSweet:756989900661850182> | Diga [on/off] para continuar")

    if(off === 'on') {
      player.setNightcore(true)
     // player.setEQ(Array(6).fill(0).map((n, i) => ({ band: i, gain: 0.55 })));
      return channel.send(`Filtro Nightcore foi ativado!`);
    } else if(off === 'off') {
      player.setNightcore(false)
     // player.setEQ(Array(6).fill(0).map((n, i) => ({ band: i, gain: 0.0 })));
      return channel.send(`Filtro Nightcore foi desativado!`);
    } else {
      return  channel.send("<:xSweet:756989900661850182> | Diga [on/off] para continuar")
    }
  }
}
