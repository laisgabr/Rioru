module.exports = class QueueEndEvent {
    constructor (client) {
        this.client = client
    }

    run(player) {
        this.client.channels.cache.get(player.voiceChannel).send('⏹️ | A Fila de Reprodução acabou...')
        
        setTimeout(() => {
            if(player) {
                if(player.playing) return;
                player.destroy()
            }
        }, 1 * 1000 * 60 * 2)
    }
}