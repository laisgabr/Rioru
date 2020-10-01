const { Listener } = require('../../structure')

module.exports = class GuildMemberAddListener extends Listener {
  constructor () {
    super({
      name: 'guildMemberAdd'
    })
  }
  async run (guild, member) {
    const firebase = require('firebase')
    const database = firebase.database()

  const db = await database.ref(`Servidores/${guild.id}/Configs`).once('value')
  if (db.val() === null) {
     return database.ref(`Servidores/${guild.id}/Configs`).set({
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
  if(db.val().BemVindoStatus === false) return;
  if (db.val().BemVindoID === "undefined") return;

   let mensagem = db.val().MensagemBemVindo
   const msg = await  mensagem.replace('{member}', '${member.user}').replace('{guild}', '${guild.name}')

  this.client.channels.cache.get(`${db.val().BemVindoID}`).send(`${msg}`).catch(async err => {
    console.log(err)
  })
  }
}
