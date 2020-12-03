const { Command } = require('../../')

module.exports = class EvalCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'eval',
            aliases: ['ev'],
            description: 'Executa códigos.',
            usage: '<prefix>eval <code>',
            category: 'developer',
            cooldown: 5,
            onlyDevs: true
        })
    }

    async execute(client, msg, args, translate) {
        let code = args.join(" ");
        if (!code) return msg.channel.createMessage(this.client.clientEmojis.getEmoji('error') + ` | ${msg.author.mention},  `)
    }
}