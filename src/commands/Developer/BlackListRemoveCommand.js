/* eslint-disable lines-between-class-members */
/* eslint-disable no-trailing-spaces */
/* eslint-disable indent */
const { Command } = require('../../structure')

module.exports = class extends Command {
    constructor (client) {
        super(client, {
            name: 'blacklistremove',
            aliases: ['asunaunban', 'asunaunbans'],
            category: 'Developer',
            devOnly: true
        })
    }
   async run ({ channel, args, mentions, author }) {
    let motivoBl = args.slice(1).join(' ')
    if (!motivoBl) motivoBl = 'Não Definido'

    const uuser = mentions.users.first() || this.client.users.cache.get(args[0]) 
        if (!uuser) {
           return channel.send('Diga um id')
        }
        
        const firebase = require('firebase')
        const database = firebase.database()

       const db = await database.ref(`Global/Blacklist/${uuser.id}`)
        .once('value')
        if (db.val() === null) {
            return channel.send('Esse usuário não está Banido')
        }

        if (!db.val() == null) {
            database.ref(`Global/Blacklist/${uuser.id}`).update(null)
        }
            
        channel.send(`${author}, Usuário desbanido com sucesso, Tomará que não quebre as regras novamente.`)
    }
}
