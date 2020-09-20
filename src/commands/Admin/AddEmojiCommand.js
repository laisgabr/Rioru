const { Command } = require('../../structure')

module.exports = class AddEmojiCommand extends Command {
    constructor (client) {
        super(client, {
            name: 'addemoji',
            aliases: ['adicionaremoji'],
            category: 'Administration'
        })
    }
    run ({ channel, guild }) {
        const link = args[0]
        const nome = args[1]

        guild.emojis.create(`${link}`, `${nome}`)
    }
}
