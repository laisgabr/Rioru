const { Listener } = require('../../structure')

module.exports = class GuildMemberRemoveListener extends Listener {
    constructor () {
        super({
            name: 'guildMemberRemove'
        })
    }
   async run (member) {
        const firebase = require('firebase')
        const database = firebase.database()

      const db = await database.ref(`Servidores/${member.guild.id}/Configs`).once('value')
      if (db.val() === null) {
         return database.ref(`Servidores/${member.guild.id}/Configs`).set({
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
           LevelSystem: false,
           LevelUpMessage: "Parabéns {author}, Você subiu para o Level {level}!"
          })
      }

      const aDb = await database.ref(`Servidores/${member.guild.id}/Locale`).once('value')
      if(aDb.val() === null) {
        database.ref(`Servidores/${member.guild.id}/Locale`).set({ Language: "pt-BR" })
      }

      if(db.val().SaidaStatus === false) return;
      if (db.val().SaidaID === "undefined") return;

      let mensagem = db.val().SaidaMensagem

   const msg = await mensagem.replace('{guild.name}', `${member.guild.name}`).replace('{member}', `<@${member.user.id}>`)

      this.channels.cache.get(`${db.val().SaidaID}`).send(`${msg}`).catch(async err => {
        console.log(err)
      })
    }
}
