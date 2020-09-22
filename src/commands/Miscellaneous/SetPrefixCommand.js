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
   async run ({ channel, args, guild, member }) {
        const firebase = require('firebase')
        const database = firebase.database()

        if(!member.permissions.has("ADMINISTRATOR", "MANAGE_GUILD")) return channel.send('Você precisa das Permissões `Administrador` e `Gerenciar Servidor`')

        const prefixo = args[0]
        if(!prefixo) return channel.send('Você não disse um Prefixo')

        const db = await database.ref(`Servidores/${guild.id}/Configs`).once('value')
        
        database.ref(`Servidores/${guild.id}/Configs`).update({
            BemVindoID: db.val().BemVindoID,
            MensagemBemVindo: db.val().MensagemBemVindo,
            SaidaID: db.val().SaidaID,
            SaidaMensagem: db.val().SaidaMensagem,
            LogsID: db.val().LogsID,
            prefix: prefixo
            })
        
        channel.send(`<:checkSweet:757016162633646211> | O Prefixo agora é \`${prefixo}\``)
    }
}
