/* eslint-disable no-useless-escape */
/* eslint-disable quotes */
/* eslint-disable no-eval */
/* eslint-disable lines-between-class-members */
/* eslint-disable indent */
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
    run ({ channel, args }) {
        const { inspect } = require('util')

        const input = args.join(' ')
        try {
            if (args[0] === 'this.client.token') {
                channel.send('\`:thumbsup:\`')
            }
            let output = eval(input)

            if (typeof output !== "string") output = inspect(output)

            if (output.size > 1950) output = output.substr(0, 1950)

            channel.send(`**Saida:**\n\`\`\`js\n${output}\n\`\`\``)
        } catch (error) {
            channel.send(`**Error:**\n\`${error}\``)
        }
    }
}
