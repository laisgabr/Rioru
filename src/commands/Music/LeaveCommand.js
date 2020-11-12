const Command = require('../../Util/Command');

module.exports = class LeaveCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'leave',
            aliases: ['sair'],
            description: 'Faz eu sair do canal de voz',
            category: 'Music',
            voiceChannelOnly: true,
            playerOnly: true
        })
    }
    run(message, args, t) {
        message.react('👋')
        
        this.client.players.get(message.guild.id).destroy()
    }
}