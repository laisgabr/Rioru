const Command = require('../../Util/Command');

module.exports = class AddEmojiCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'addemoji',
            aliases: ['adicionaremoji', 'addemote', 'adicionaremote'],
            description: 'Achou um emoji legal e quer te-lo em seu servidor ? Use isso',
            category: 'Moderation'
        })
    }
    run(message, args, t) {
        
    }
}