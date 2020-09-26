/* eslint-disable lines-between-class-members */
/* eslint-disable indent */
const { Command } = require('../../structure')

module.exports = class StopCommand extends Command {
    constructor (client) {
        super(client, {
            name: 'stop',
            aliases: ['pausar', 'pause'],
            category: 'Music'
        })
    }
    run ({ channel, guild, lavalink, member }) {
      const voiceChannel = member.voice.channel;
    if (!voiceChannel) return channel.send('<:xSweet:756989900661850182> | Você precisa estar em um canal de voz ou no mesmo que eu.')
      const player = lavalink.players.get(guild.id);
      if(!player) return channel.send('<:xSweet:756989900661850182> | Não tem músicas tocando nesse Servidor!')

      if(!player.playing) return channel.send('Já está pausado')

      player.pause(true);
      return channel.send('⏸️ | Pausado');
    }
}
