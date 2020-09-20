const { Command } = require('../../structure')

module.exports = class MarryCommand extends Command {
    constructor (client) {
        super(client, {
            name: 'marry',
            aliases: ['casar'],
            category: 'Fun'
        })
    }
   async run ({ channel, mentions, args, author }) {
        const moment = require('moment')
        moment.locale('pt-BR')

        const firebase = require('firebase')
        const database = firebase.database()

        const uuser = mentions.users.first() || this.client.users.cache.get(args[0])
        if (!uuser) {
            return channel.send('Você não mencionou alguém')
        }

        if (uuser.id === author.id) {
            return channel.send('Não dá pra se casar consigo mesmo(a)')
        } 
        

        const db = await database.ref(`Global/Couples/${author.id}`).once('value')
        const dbb = await database.ref(`Global/Couples/${uuser.id}`).once('value')

        if (db.val().ParID === uuser.id && dbb.val().ParID === author.id) {
            return channel.send(`Vocês já são casados(as)!`)
        }
        if (db.val() === null && dbb.val() === null) {
            channel.send(`${uuser}, O (A) Usuário(a) <@${author.id}> lhe pediu em casamento, Clique em ✅ para aceitar ou Clique em ❌ para Recusar.`).then(async msg => {
            msg.react('✅')
            msg.react('❌')

        const sim = (reaction, user) => reaction.emoji.name === '✅' && user.id === author.id
        const no = (reaction, user) => reaction.emoji.name === '❌' && user.id === author.id
        const collectorDaMsg = msg.createReactionCollector(sim)
        const collectorNo = msg.createReactionCollector(no)

   collectorDaMsg.on('collect', async r => {
            msg.delete({ timeout: 2000 })
            database.ref(`Global/Couples/${uuser.id}`).set({
                ParID: author.id,
                Dia: moment(Date.now()).format('LLL')
            })
            database.ref(`Global/Couples/${author.id}`).set({
                ParID: uuser.id,
                Dia: moment(Date.now()).format('LLL')
            })
            channel.send(`${author} e ${uuser}, Vocês estão casados(as) :heart: .`)
        })

        collectorNo('collect', async r => {
            msg.delete({ timeout: 2000 })
            channel.send('Parece que você não encontrou a pessoa certa :sob:')
        })
    })
        }
        if (!dbb.val() === null) {
           return channel.send(`O(A) usuário(a) mencionado(a) está casado(a) com <@${dbb.val().ParID}> desde ${dbb.val().Dia - moment(Date.now()).format('LLL')}`)
        }

        if (!db.val() === null) {
            return channel.send(`Você já é casado(a) com outra pessoa. Peça Divorcio á <@${db.val().ParID}> para poder se casar com ${uuser}`)
        }

       
  }
}
