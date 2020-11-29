const { Command } = require('../../')

module.exports = class EvalCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'eval',
            aliases: ['ev'],
            description: 'Executa códigos.',
            usage: '<prefix>eval <code>',
            category: 'developer',
            cooldown: 5
        })
    }

    async execute(client, msg, zoe, args, t) {
        if (!this.client.settings.owners.includes(msg.author.id)) return;

        let code = args.join(" ");
        if (!code) return msg.channel.createMessage(this.client.clientEmojis.getEmoji('error') + ` | ${msg.author.mention},  `)
    }
}