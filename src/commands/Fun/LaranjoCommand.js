const Command = require('../../Util/Command');
const emj = require('../../API/connectEmoji');

module.exports = class LaranjoCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'laranjo',
            aliases: [],
            description: '',
            category: ''
        })
    }
    run(message, args, t) {
        console.log('a')
    }
}