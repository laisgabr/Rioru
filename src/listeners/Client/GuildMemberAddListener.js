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
          prefix: "y!",
          BemVindoID: "undefined",
          MensagemBemVindo: `Olá {member}, Seja bem-vindo(a) a {guild.name}`,
          SaidaID: "undefined",
          SaidaMensagem: `{member} saiu do Servidor :(`,
          LogsID: "undefined"
      })
  }
  if (db.val().BemVindoID === "undefined") return;

  const mensagem = db.val().MensagemBemVindo
    mensagem.replace('{member}', '${member}')
    mensagem.replace('{guild}', '${guild.name}')

  this.client.channels.cache.get(`${db.val().BemVindoID}`).send(`${mensagem}`).catch(async err => {
    console.log(err)
  })
  }
}
