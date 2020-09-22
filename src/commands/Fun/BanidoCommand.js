const { Command } = require('../../structure')

module.exports = class BanidoCommand extends Command {
    constructor (client) {
        super(client, {
            name: 'banido',
            aliases: [],
            category: 'Fun'
        })
    }
    run ({ channel }) {
        channel.send({ files: [{ attachment: '../../../Assets/Banido.mp4', name: 'Banido.mp4' }] })
    }
}
