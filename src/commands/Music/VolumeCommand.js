const { Command } = require('../../structure')

module.exports = class VolumeCommand extends Command {
    constructor (client) {
        super(client, {
            name: 'volume',
            aliases: [],
            category: 'Music'
        })
    }
    run ({ channel, args, lavalink, guild, member }) {
      const voiceChannel = member.voice.channel;
      if (!voiceChannel) return channel.send('<:xSweet:756989900661850182> | Você precisa estar em um canal de voz ou no mesmo que eu.')

      const player = lavalink.players.get(guild.id);
      if(!player) return channel.send('<:xSweet:756989900661850182> | Não tem nenhuma música tocando nesse Servidor')

      if (!args[0]) return channel.send(`Volume Atual é de ${player.volume}%`);
      if (Number(args[0]) <= 0 || Number(args[0]) > 100) return channel.send("<:xSweet:756989900661850182> | Diga um volume que seja de 1 até 100!");

      player.setVolume(Number(args[0]));
      return channel.send(`Agora o volume é de ${args[0]}%`)
    }
}
