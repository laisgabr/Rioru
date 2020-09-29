const { Command } = require('../../structure')

module.exports = class SkipCommand extends Command {
    constructor (client) {
        super(client, {
            name: 'skip',
            aliases: ['pular'],
            usage: '<prefix>skip',
            description: 'Cansou da música ? Pule ela!',
            category: 'Music'
        })
    }
   async run ({ channel, guild, lavalink, member }) {
    const voiceChannel = member.voice.channel;
    if (!voiceChannel) return channel.send('<:xSweet:756989900661850182> | Você precisa estar em um canal de voz ou no mesmo que eu.')

     const player = lavalink.players.get(guild.id);
    if(!player) return channel.send('<:xSweet:756989900661850182> | Não tem nenhuma música tocando nesse Servidor!')

     if(player.trackRepeat === true) {
       player.setTrackRepeat(false)
       player.stop();
       player.setTrackRepeat(true)
       return channel.send('Música Pulada com sucesso!')
     }

     player.stop();
    return channel.send("Música Pulada com sucesso!");
  }
}
