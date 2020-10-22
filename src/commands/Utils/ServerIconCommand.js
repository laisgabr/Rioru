const Command = require('../../Util/Command');
const emj = require('../../API/connectEmoji');

module.exports = class ServerIconCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'servericon',
            aliases: [],
            description: 'Mostra o Icone do Servidor',
            category: 'Utils'
        })
    }
    run(message, args, t) {
        
    }
}