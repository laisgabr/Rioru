module.exports = class RawEvent {
    constructor (client) {
        this.client = client
    }
    run(oldState, newState) {
        const guild = oldState.guild || newState.guild;
        if(!guild) return;

        const player = this.client.music.players.get((oldState || newState).guild.id)
        
        if(player) {
        const voiceChannelPlayer = this.client.channels.cache.get(player.voiceChannel.id);

          if(voiceChannelPlayer && voiceChannelPlayer.members.size === 1 && voiceChannelPlayer.members.has(this.client.user.id)) {
            this.client.channels.cache.get(player.voiceChannel).send(':sleeping: | Saindo do canal pois não tinha ninguém nele...')
            player.destroy()
          }
        }
    }
}