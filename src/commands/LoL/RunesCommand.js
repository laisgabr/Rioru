const Command = require('../../Util/Command');

module.exports = class RunesCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'runes',
            aliases: ['runas'],
            description: 'Mostra as Runas do LoL',
            category: 'Lol'
        })
    }
    run(message, args, t) {

    }
}