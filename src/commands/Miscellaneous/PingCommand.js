const Command = require('../../Util/Command')

module.exports = class PingCommand extends Command {
    constructor (client) {
        super(client, {
            name: "ping",
            aliases: ["latencia"],
            category: "Miscellaneous",
            description: "Mostra a minha latência."
        })
    }

    run(message, args, t) {
        message.channel.send("📡 | " + t('commands:Ping.sucess', { ping: this.client.ws.ping }))
    }
}