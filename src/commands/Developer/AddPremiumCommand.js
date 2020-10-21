const Command = require('../../Util/Command')

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