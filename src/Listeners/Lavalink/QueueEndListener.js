const { Listener } = require('../../')

module.exports = class QueueEndListener extends Listener {
    constructor(client) {
        super(client, {
            name: 'queueEnd'
        })
    }

    run(player) {
        if(!player) return;

        this.client.createMessage(player.textChannel, this.client.t(''))
    }
}