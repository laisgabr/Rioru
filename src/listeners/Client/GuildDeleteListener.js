const { Listener } = require('../../structure')

module.exports = class extends Listener {
    constructor() {
        super({
            name: 'guildDelete'
        })
    }
   async run (guild) {
        const database = require('firebase').database()
       await database.ref(`Servidores/${guild.id}/Configs`).set(null)
       
       await database.ref(`Servidores/${guild.id}/Locale`).set(null)

    }
}