const Command = require('../../Util/Command');
const emj = require('../../API/connectEmoji');

module.exports = class AddPremiumCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'addpremium',
            aliases: [],
            category: 'Developer',
            onlyDevs: true
        })
    }
    run(message, args, t) {
        
    }
}