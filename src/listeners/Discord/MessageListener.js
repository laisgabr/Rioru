/* eslint-disable semi */
/* eslint-disable no-trailing-spaces */
/* eslint-disable eqeqeq */
/* eslint-disable no-useless-escape */
/* eslint-disable indent */
const { Listener, CommandContext } = require('../../structure')
const { getPrefix } = require('../../util')

const Prefixos = '\`ya!\` e \`y!\`'

module.exports = class MessageListener extends Listener {
  constructor () {
    super({
      name: 'message'
    })
  }

 async run (message, author) {
    const { CooldownManager } = require('../../util')
    const cooldownManager = CooldownManager(1000 * 60)

    if (!cooldownManager.has(message.author.id)) {
      cooldownManager.add(message.author.id)
    }

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

    const prefix = getPrefix(message)
    if (!message.content.toLowerCase().startsWith(prefix)) return

    if (message.content === `<@${this.user.id}>` || message.content === `<@!${this.user.id}>`) return message.channel.send(`Olá <@${author.id}>, Meu prefixo é \`${Prefixos}\`. Use \`ya!ajuda\` ou \`ya!info\` para mais Informações.`)

    if (message.channel.type == 'dm') {
    message.reply('Não respondo via dm ok ?')
    message.delete({ timeout: 5000 })
    }

    const args = message.content.slice(prefix.length).trim().split(/ +/g)
    const cmd = args.shift().toLowerCase()
    const command = this.commands.find(({ name, aliases }) => name === cmd || aliases.includes(cmd))
    
    const firebase = require('firebase')
    const database = firebase.database()

    const context = new CommandContext(message, args, cmd, prefix, database)

    if (command) command.preLoad(context)
  }
}
