const { Command } = require('../../structure') 

module.exports = class SetAFKCommand extends Command {
    constructor (client) {
        super(client, {
            name: 'setafk',
            aliases: ['setarafk'],
            category: 'Miscellaneous'
        })
    }
   async run ({ channel, author, args }) {
        const firebase = require('firebase')
        const database = firebase.database()

      const db = await database.ref(`Global/AFK's/${author.id}`).once('value')
      if (db.val() === null) {
          database.ref(`Global/AFK's/${author.id}`).set({
              AFK: true
          })
      }
      if (!db.val() === null) {
          database.ref(`Global/AFK's/${author.id}'`).update({
              AFK: true
          })
      }
    }
}
