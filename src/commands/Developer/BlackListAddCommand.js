const { Command } = require('../../structure')

module.exports = class extends Command {
    constructor (client) {
        super(client, {
            name: 'blacklistadd',
            aliases: ['asunaban', 'asunabans'],
            category: 'Developer',
            devOnly: true
        })
    }
   async run ({ channel, author, args, mentions }) {
    let motivoBl = args.slice(1).join(' ')
    if (!motivoBl) motivoBl = 'Não Definido'

    const uuser = mentions.users.first() || this.client.users.cache.get(args[0])
        if (!uuser) {
           return channel.send('<:xSweet:756989900661850182> | Diga um id')
        }

        if(uuser.id === this.client.config.owners.includes(uuser.id)) {
          return channel.send('Ta com problema? Vai arrumar outra coisa pra fazer')
        }

        const firebase = require('firebase')
        const database = firebase.database()

       const db = await database.ref(`Global/Blacklist/${uuser.id}`)
        .once('value')
            if (db.val() === null) {
                database.ref(`Global/Blacklist/${uuser.id}`).set({
                    Blacklisted: true,
                    Motivo: motivoBl,
                    QuemPuniu: author.tag,
                    IdStaff: author.id
                  })
            }

            if (!db.val() == null) {
              return channel.send(`O(a) usuário(a) <@${uuser.id}> está banido(a) por ${db.val().Motivo} e foi punido(a) por <@${db.val().IdStaff}>`)
            }

        channel.send(`<:checkSweet:757016162633646211> | ${author}, Usuário banido com sucesso, Quem mandou quebrar as regras!`)
    }
}
