const { Command } = require('../../structure')

module.exports = class extends Command {
    constructor (client) {
        super(client, {
            name: 'mute',
            aliases: ['mutar'],
            category: 'Moderation'
        })
    }
   async run ({ channel, guild, mentions, args, author, member }) {
    const database = require('firebase').database()
    const db = await database.ref(`Servidores/${guild.id}/Locale`).once('value')

    const user = mentions.users.first() || guild.members.cache.get(args[0])
    if(!user) return channel.send('Desativado....')
    channel.send('Desativado.... depois será refeito')
   }
}
