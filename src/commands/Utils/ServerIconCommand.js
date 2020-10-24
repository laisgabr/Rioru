const Command = require('../../Util/Command');

module.exports = class ServerIconCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'servericon',
            aliases: [],
            description: 'Mostra o Icone do Servidor',
            category: 'Utils'
        })
    }
    async run(message, args, t) {
        
    }
}