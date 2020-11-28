const { Command } = require('../../')

module.exports = class PlayCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'play',
            aliases: ['p'],
            description: 'Toca a música de sua escolha no canal de voz',
            usage: '<prefix>play <args>',
            category: 'Music',
            cooldown: 8
        })
    }

    execute(client, msg, zoe, args, t) {
    
    }
}