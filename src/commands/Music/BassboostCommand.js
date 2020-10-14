const { Command } = require('../../structure')
const { ZoePlayer } = require('../../Music')

module.exports = class extends Command {
    constructor (client) {
        super(client, {
            name: 'bassboost',
            aliases: [],
            category: 'Music',
            voiceChannelOnly: true,
            playerOnly: true,
            playingOnly: true
        })
    }
    run ({ lavalink, channel, guild, args }) {
      const player = lavalink.players.get(guild.id);
     
      const customPlayer = new ZoePlayer()

      const off = args[0]
      if(!off) return  channel.send("<:xSweet:756989900661850182> | Diga [on/off] para continuar")

      if(off === 'on') {
        customPlayer.setTimescale(3, 3, 3)
       // player.setEQ(Array(6).fill(0).map((n, i) => ({ band: i, gain: 1.50 })));
        return channel.send(`Filtro Bassbost foi ativado!`);
      } else if(off === 'off') {
        customPlayer.setTimescale(1, 1, 1)
      //  player.setEQ(Array(6).fill(0).map((n, i) => ({ band: i, gain: 0.0 })));
        return channel.send(`Filtro Bassbost foi desativado!`);
      } else {
        return  channel.send("<:xSweet:756989900661850182> | Diga [on/off] para continuar")
      }
      }
}
