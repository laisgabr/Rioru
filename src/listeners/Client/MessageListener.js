/* eslint-disable semi */
/* eslint-disable no-trailing-spaces */
/* eslint-disable eqeqeq */
/* eslint-disable no-useless-escape */
/* eslint-disable indent */
const { Listener, CommandContext } = require('../../structure')
// const { getPrefix } = require('../../util')

module.exports = class MessageListener extends Listener {
  constructor () {
    super({
      name: 'message'
    })
  }
// onde tttá o ini no ????????
 // eslint-disable-next-line lines-between-class-members
 async run (message, author) {
    if (message.author.bot || message.channel.type !== 'text') return
      const aa = await this.database.ref(`Global/Blacklist/${message.author.id}`).once('value');
        if (aa.val()) {
        return message.author.send(`Você, ${message.author.tag} (\`${message.author.id}\`) , foi Banido Permanentemente de Usar a **Yuuki Asuna**.
        
        Se foi injusto o banimento (Duvido que foi injusto rs) ,Comunique os Staffs do Bot e espere a resposta deles. Se você foi banido do Servidor de Suporte, O problema não é meu

        Staff do Bot que lhe Baniu:
       > ${aa.val().QuemPuniu} (\`${aa.val().IdStaff})\`)

        Motivo: 
       > ${aa.val().Motivo}
        `)
        }
  
    this.database.ref(`Global/Economia/${message.author.id}`).once('value').then(async db => {
      if (db.val() == null) {
        this.database.ref(`Global/Economia/${message.author.id}`).set({
          Coins: 0
        })
      }
    })
    
    this.database.ref(`Servidores/${message.guild.id}/Levels/${message.author.id}`)
    .once('value').then(async db => {
      if (db.val() == null) {
        if (message.content.length > 5) return console.log('a');
        this.database.ref(`Servidores/${message.guild.id}/Levels/${message.author.id}`).set({
          xp: 0,
          level: 1,
          message: 0,
          Enviadas: 1
        })
        if (db.val().Enviadas === 24) {
          this.database.ref(`Servidores/${message.guild.id}/Levels/${message.author.id}`).update({
            xp: db.val().xp,
            level: db.val().level + 1,
            message: db.val().message + 1,
            Enviadas: db.val().Enviadas + 1 - 25
          })
          message.channel.send(`Parabéns ${message.author}! Você upou para o Level ${db.val().level}`)
        }
      } else {
        if (message.content.length > 5) return;
        const xpGanho = Math.floor(Math.random() * 10) + 1

        if (db.val().xp < db.val().level * 100) {
          this.database.ref(`Servidores/${message.guild.id}/Levels/${message.author.id}`).update({
            xp: db.val().xp + xpGanho,
            level: db.val().level,
            message: db.val().message + 1,
            Enviadas: db.val().Enviadas + 1
          })

        if (db.val().Enviadas === 24) {
          this.database.ref(`Servidores/${message.guild.id}/Levels/${message.author.id}`).update({
            xp: db.val().xp,
            level: db.val().level + 1,
            message: db.val().message + 1,
            Enviadas: db.val().Enviadas - 25
          })
          message.channel.send(`Parabéns ${message.author}! Você upou para o Level ${db.val().level}, Você tem ${db.val().xp} xp`)
        }
        } else {
        if (message.content.length > 5) return;
          this.database.ref(`Servidores/${message.guild.id}/Levels/${message.author.id}`).update({
          xp: db.val().xp + xpGanho,
          level: db.val().level + 1,
          message: db.val().message + 1,
          Enviadas: db.val().Enviadas + 1
        })

        if (db.val().Enviadas === 24) {
          this.database.ref(`Servidores/${message.guild.id}/Levels/${message.author.id}`).update({
            xp: db.val().xp,
            level: db.val().level + 1,
            message: db.val().message + 1,
            Enviadas: db.val().Enviadas - 25
          })
          message.channel.send(`Parabéns ${message.author}! Você upou para o Level ${db.val().level}, Você tem ${db.val().xp} xp`)
        }
      }
    }
   })
   
   const dbbb = await this.database.ref(`Servidores/${message.guild.id}/Configs`).once('value')
   let prefix = dbbb.val().prefix
   if (dbbb.val() === null) {
     prefix = 'y!'
   }

   if (message.content === '<@747864108958875648>' || message.content === '<@!747864108958875648>') return message.channel.send(`Olá <@${message.author.id}>, Meu prefixo é ${prefix}, use ${prefix}ajuda ou ${prefix}info para mais Informações.`)

    if (!message.content.toLowerCase().startsWith(prefix)) return

    const args = message.content.slice(prefix.length).trim().split(/ +/g)
    const cmd = args.shift().toLowerCase()
    const command = this.commands.find(({ name, aliases }) => name === cmd || aliases.includes(cmd))
    
    const context = new CommandContext(message, args, cmd, prefix)

    if (command) command.preLoad(context)
  }
}
