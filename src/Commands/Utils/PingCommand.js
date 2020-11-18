const { Command } = require('../../')

module.exports = class PingCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'ping',
            aliases: ['pong']
        })
    }

    run(client, msg, args, t) {
        client.createMessage(msg.channel.id, `Ping ? \`Hoje não tem ping\``)
    }
}