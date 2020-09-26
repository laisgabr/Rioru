/* eslint-disable lines-between-class-members */
/* eslint-disable no-trailing-spaces */
/* eslint-disable indent */
const { Command } = require('../../structure')

module.exports = class BlacklistRemoveCommand extends Command {
    constructor (client) {
        super(client, {
            name: 'blacklistremove',
            aliases: ['asunaunban', 'asunaunbans'],
            category: 'Developer',
            devOnly: true
        })
    }
   async run ({ channel, author }) {
       channel.send('Desativado...')
       /* let id = channel.createMessageCollector(m => m.author.id === author.id, { time: 60000, max: 1 })

        id.on('collect', () => {
            channel.send(`O(a) usuário(a) é ${id.collected.first().content}`)
            const memberID = id.collected.first().content

            const firebase = require('firebase')
            const database = firebase.database()

           const db = await database.ref(`Global/Blacklist/${memberID}`)
            .once('value')
            if (db.val() === null) {
                return channel.send('Esse usuário não está Banido')
            }

            if (!db.val() == null) {
                database.ref(`Global/Blacklist/${memberID}`).set(null)
            }

            channel.send(`<:checkSweet:757016162633646211> | ${author}, Usuário desbanido com sucesso, Tomará que não quebre as regras novamente.`)

        })
        */
    }
}
