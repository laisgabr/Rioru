const { Listener } = require('../../')

module.exports = class extends Listener {
    constructor(client) {
        super(client, {
            name: 'rawWS'
        })
    }

    run(packet) {
       // this.client.music.packetUpdate(packet)
       
    }
}