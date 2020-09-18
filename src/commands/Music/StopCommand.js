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
    if (!voiceChannel) return channel.send(':x: | Você precisa estar em um canal de voz ou no mesmo que eu.')
      const player = lavalink.players.get(guild.id);
      if(!player.queue[0] || !player) return channel.send('Não tem músicas tocando')
      
      player.pause(player.playing);
      return channel.send('⏸️ | Pausado - Use o Comando Novamente para Despausar!');
    }
}
