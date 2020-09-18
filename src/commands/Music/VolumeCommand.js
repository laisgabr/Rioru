/* eslint-disable indent */
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
      if (!voiceChannel) return channel.send(':x: | Você precisa estar em um canal de voz ou no mesmo que eu.')
      
      const player = lavalink.players.get(guild.id);
      if(!player.queue[0] || !player) return channel.send('Não tem músicas tocando')
      
      if (!args[0]) return channel.send(`Volume Atual é de: ${player.volume}%`);
      if (Number(args[0]) <= 0 || Number(args[0]) > 100) return channel.send("Diga um volume que seja de 1 até 100");

      player.setVolume(Number(args[0]));
      return channel.send(`Agora o volume é: ${args[0]}%`)
    }
}
