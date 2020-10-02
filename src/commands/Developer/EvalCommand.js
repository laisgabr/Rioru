const { Command } = require('../../structure')

module.exports = class EvalCommand extends Command {
    constructor (client) {
        super(client, {
            name: 'eval',
            aliases: ['ev'],
            category: 'Developer',
            devOnly: true
        })
    }
    run ({ channel, args, guild, member, msg, mentions, author, lavalink, client, config }) {
        const { inspect } = require('util')

        const input = args.join(' ')
        if(!input) return channel.send('Diga algo!')
        try {
            if (input === 'this.client.token') {
               return channel.send(':thumbsup:')
            }
            let output = eval(input)

            if (typeof output !== "string") output = inspect(output)

            if (output.size > 1950) output = output.substr(0, 1950)

            channel.send(`**Saida:**\n\`\`\`js\n${output}\n\`\`\``)
        } catch (error) {
            channel.send(`<:xSweet:756989900661850182> | **Erro:**\n\`${error}\``)
        }
    }
}
