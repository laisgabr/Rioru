const { Command } = require('../../structure')

module.exports = class VolumeCommand extends Command {
    constructor (client) {
        super(client, {
            name: 'volume',
            aliases: [],
            category: 'Music',
            voiceChannelOnly: true,
            playerOnly: true,
            playingOnly: true
        })
    }
    run ({ channel, args, lavalink, guild, member }) {
      const player = lavalink.players.get(guild.id);
      
      if (!args[0]) return channel.send(`Volume Atual é de ${player.volume}%`);
      if (Number(args[0]) <= 0 || Number(args[0]) > 100) return channel.send("<:xSweet:756989900661850182> | Diga um volume que seja de 1 até 100!");

      player.setVolume(Number(args[0]));
      return channel.send(`Agora o volume é de ${args[0]}%`)
    }
}
