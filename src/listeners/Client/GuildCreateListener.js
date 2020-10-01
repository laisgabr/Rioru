const { Command } = require('../../structure')

module.exports = class GuildCreateListener extends Command {
    constructor () {
        super({
            name: 'guildCreate'
        })
        
    }
   async run (guild) {
       const database = require('firebase').database()
       const db = await database.ref(`Servidores/${message.guild.id}/Configs`).once('value')

       if(db.val() === null) {
          database.ref(`Servidores/${message.guild.id}/Configs`).set({
            prefix: "z!",
            systemAntiInvite: false,
            systemAntiCapsLock: false,
            systemAntiLinks: false,
            BemVindoStatus: false,
            BemVindoID: "undefined",
            MensagemBemVindo: `Olá {member}, Seja bem-vindo(a) a {guild.name}`,
            SaidaStatus: false,
            SaidaID: "undefined",
            SaidaMensagem: `{member} saiu do Servidor :(`,
            LogsStatus: false,
            LogsID: "undefined"
          })
       }
       if(!db.val() === null) return;
   }
}
