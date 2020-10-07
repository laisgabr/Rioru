const { Listener } = require('../../structure')

module.exports = class VoiceStateUpdateListener extends Listener {
    constructor() {
        super({
            name: 'voiceStateUpdate'
        })
    }
    run (oldState, newState) {
        setTimeout(async function() {
       const sizeMembers = await this.client.lavalink.players.get(oldState.guild.id).voiceChannel.members.size

       if(sizeMembers < 2) {
           this.client.lavalink.destroy(oldState.guild.id)
        const idText = await this.client.lavalink.players.get(oldState.guild.id).textChannel.id
        this.channels.cache.get(idText).send(':sleeping: | Sai do canal pois não tinha ninguém nele!')
       }
        }, 30000)
    }
}
