const Command = require('../../Util/Command');

module.exports = class EvalCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'eval',
            aliases: ['eval', 'e'],
            category: 'Developer'
        })
    }
    run(message, args, t) {
        const { inspect } = require('util')

        const input = args.join(' ')
        if(!input) return message.channel.send('Diga algo!')
        
        try {
            let output = eval(input)

            if(this.client.token.includes(output)) return message.channel.send(':thumbsup:')

            if (typeof output !== "string") output = inspect(output)

            if (output.size > 1950) output = output.substr(0, 1950)

            message.channel.send(`**Saida:**\n\`\`\`js\n${output}\n\`\`\``)
        } catch (error) {
            message.channel.send(`<:xSweet:756989900661850182> **Erro:**\n\`${error}\``)
        }
    }
}