const Command = require('../../Util/Command');

module.exports = class ChampionsCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'champions',
            aliases: ['lolchamps'],
            description: 'Mostra informações sobre um Campeão do LoL',
            category: 'Lol'
        })
    }
    run(message, args, t) {

    }
}