const { Listener } = require('../../')

module.exports = class ReadyListener extends Listener {
    constructor(client) {
        super(client, {
            name: 'ready'
        })
    }

    run() {
        this.client.music.init(this.client.user.id);
        console.log('Estou online')
        this.client.editStatus('online', { name: 'Teste', type: 1, url: 'https://www.twitch.tv/mrgamingbr0001' })
    }
}