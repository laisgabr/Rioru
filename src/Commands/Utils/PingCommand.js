const { Command } = require('../../')

module.exports = class PingCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'ping',
            aliases: ['pong'],
            description: 'Mostra o meu Ping',
            usage: '<prefix>ping',
            category: 'Miscellaneous',
            cooldown: 5
        })
    }

    run(client, msg, args, t) {
        client.createMessage(msg.channel.id, t('commands:PingCmd.Sucess', { ping: client.shards.get(0).latency }))
    }
}