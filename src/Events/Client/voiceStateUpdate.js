module.exports = class VoiceStateUpdateEvent {
  constructor (client) {
      this.client = client
  }
 async run(oldState, newState) {
      const guild = oldState.guild || newState.guild;
      if(!guild) return;

      const mongo = await this.client.database.GuildSchema.findOne({ '_id': guild.id })
      if(!mongo) {
        this.client.database.GuildSchema.create({ '_id': guild.id })
      }

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
