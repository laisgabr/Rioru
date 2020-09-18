/* eslint-disable indent */
const { Command } = require('../../structure')

module.exports = class extends Command {
    constructor (client) {
        super(client, {
            name: 'setprefix',
            aliases: [],
            category: 'Miscellaneous'
        })
    }
   // eslint-disable-next-line lines-between-class-members
   async run ({ channel, args, guild }) {
        const firebase = require('firebase')
        const database = firebase.database()

        const prefixo = args[0]

        const db = await database.ref(`Servidores/${guild.id}/Configs`).once('value')

        if (db.val() === null) {
            database.ref(`Servidores/${guild.id}/Configs`).set({
                prefix: prefixo
            })
        } else {
            database.ref(`Servidores/${guild.id}/Configs`).update({
                prefix: prefixo
            })
        }
        channel.send(`Agora o Prefixo é \`${prefixo}\``)
    }
}
