const { Listener } = require('../../')

module.exports = class ReadyListener extends Listener {
    constructor(client) {
        super(client, {
            name: 'ready'
        })
    }

    run() {
        console.log('Estou online')
        this.client.editStatus({ name: 'Teste', type: 1, url: 'https://www.twitch.tv/mrgamingbr0001' })
    }
}