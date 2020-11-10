const Command = require('../../Util/Command');

module.exports = class AboutMeCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'aboutme',
            aliases: ['sobremim'],
            description: 'Muda o sobremim do seu Profile',
            category: ''
        })
    }
    run(message, args, t) {
        
    }
}