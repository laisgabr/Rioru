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
        msg.channel.createMessage(t('Utils:PingCommand.Sucess', { ping: client.shards.get(0).latency }))
    }
}