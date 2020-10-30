const Command = require('../../Util/Command');

module.exports = class ClearAllEffectsCommand extends Command {
    constructor(client) {
        super(client, {
            name: '',
            aliases: [],
            description: '',
            category: ''
        })
    }
    run(message, args, t) {
        const player = this.client.music.players.get(message.guild.id)
        player.clearEffects()
    }
}