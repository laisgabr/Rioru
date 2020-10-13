const { Command } = require('../../structure')

module.exports = class SkipCommand extends Command {
    constructor (client) {
        super(client, {
            name: 'skip',
            aliases: ['pular'],
            usage: '<prefix>skip',
            description: 'Cansou da música ? Pule ela!',
            category: 'Music',
            voiceChannelOnly: true,
            playerOnly: true,
            PlayingOnly: true
        })
    }
   async run ({ channel, guild, lavalink }) {
    const player = lavalink.players.get(guild.id);
    
     if(player.trackRepeat === true) {
       player.setTrackRepeat(false)
       
       player.stop()
       
       player.setTrackRepeat(true)
       return channel.send('Música Pulada com sucesso!')
     }

     player.stop();
    return channel.send("Música Pulada com sucesso!");
  }
}
