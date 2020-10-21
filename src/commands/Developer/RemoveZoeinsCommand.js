const Command = require('../../Util/Command')

module.exports = class RemoveZoeinsCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'removezoins',
            aliases: ['removerzoins'],
            category: 'Developer'
        })
    }
    run(message, args, t) {
        console.log('a')
    }
}