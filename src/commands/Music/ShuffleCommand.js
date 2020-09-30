const { Command } = require('../../structure')

module.exports = class ShuffleCommand extends Command {
  constructor(client) {
    super(client, {
      name: 'shuffle',
      aliases: ['embaralhar'],
      category: 'Music'
    });
  }
  run ({ channel, lavalink, guild, member }) {
    const voiceChannel = member.voice.channel;
    if(!voiceChannel) return channel.send('| Você não está em um canal de voz!')

    const player = lavalink.players.get(guild.id)
    if(!player) {
      return channel.send(' | Não tem nada tocando nesse Servidor')
    }
    player.queue.shuffle()
    return channel.send('Embaralhando a Lista de Reprodução!')
  }
}
