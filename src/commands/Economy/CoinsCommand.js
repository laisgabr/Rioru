const { Command } = require('../../structure')

module.exports = class CoinsCommand extends Command {
    constructor (client) {
        super(client, {
            name: 'coins',
            aliases: [],
            category: 'Economy'
        })
    }
   async run ({ channel, mentions, client, args, author }) {
        const database = require('firebase').database()
/*
        const user = mentions.users.first() || client.users.fetch(args[0]) || author
        

        const db = await database.ref(`Global/Economia/${user.id}`).once('value')

        if(user.id === author.id) {
            return channel.send('You have ' + db.val().Coins + ' Zoe Cash')
        }

        if(user.id === author.id) return channel.send()
        channel.send('a ' + ' a')
        */
    }
}
