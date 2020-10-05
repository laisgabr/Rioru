const { Listener, CommandContext } = require('../../structure')

module.exports = class MessageListener extends Listener {
  constructor () {
    super({
      name: 'message'
    })
  }

 async run (message) {
    try {
      if (message.channel.type !== 'text') return;

      const dbbb = await this.database.ref(`Servidores/${message.guild.id}/Configs`).once('value')
      if (dbbb.val() === null) {
        this.database.ref(`Servidores/${message.guild.id}/Configs`).set({
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
      if(message.author.bot) return;
      if (dbbb.val().systemAntiLinks === true) {

        if (message.content.includes('https://') || message.content.includes('http://') || message.content.includes('www.')) {
          message.delete({timeout: 1000})
          message.channel.send('Você não pode enviar links aqui!').then(async msg => {
            msg.delete({timeout: 8000})
          })
        }
      }
      if (dbbb.val().systemAntiCapsLock === true) {
        const reg = /[A-Z]{6,}/g
        if (message.content.match(reg)) {
          message.delete({timeout: 2000})
          message.channel.send('Excesso de Caps Lock!').then(msg => msg.delete({timeout: 8000}))
        }
      }
      let prefix = dbbb.val().prefix
      if (prefix === null) {
        prefix = 'z!'
      }
    
      this.database.ref(`Servidores/${message.guild.id}/Levels/${message.author.id}`)
        .once('value').then(async db => {
        if (db.val() == null) {
          if (message.content.length > 5) return;
          this.database.ref(`Servidores/${message.guild.id}/Levels/${message.author.id}`).set({
            xp: 0,
            level: 1,
            message: 0,
            Enviadas: 1
          })
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
              message.channel.send(`Parabéns ${message.author}! Você upou para o Level ${db.val().level} .`)
            }
          } else {
            if (message.content.length > 5) return;
            this.database.ref(`Servidores/${message.guild.id}/Levels/${message.author.id}`).update({
              xp: db.val().xp + xpGanho,
              level: db.val().level + 1,
              message: db.val().message + 1,
              Enviadas: db.val().Enviadas + 1
            })
          }
        }
      })

      if (message.content === `<@747864108958875648>` || message.content === `<@!747864108958875648>` || message.content === '<@711341613930250330>' || message.content === '<@!711341613930250330>') return message.channel.send(`Olá <@${message.author.id}>, Meu nome é Zoe e meu prefixo em ${message.guild.name} é \`${prefix}\`, use \`${prefix}ajuda\`  para saber meus Comandos.`)

      if (!message.content.toLowerCase().startsWith(prefix)) return;
      
        const aa = await this.database.ref(`Global/Blacklist/${message.author.id}`).once('value');
      if (aa.val()) {
        return message.author.send(`Você, ${message.author.tag} (\`${message.author.id}\`) , foi Banido Permanentemente de Usar a **Zoe**.

        Se foi injusto o banimento (Duvido que foi injusto rs) ,Comunique os Staffs do Bot e espere a resposta deles. Se você foi banido do Servidor de Suporte, O problema não é meu

        Staff do Bot que lhe Baniu:
       > ${aa.val().QuemPuniu} (\`${aa.val().IdStaff})\`)

        Motivo:
       > ${aa.val().Motivo}
        `)
      }

      if (message.author.id === message.guild.owner.id) {
        if (!message.guild.me.permissions.has("ADMINISTRATOR")) message.channel.send('Por favor, me dê a Permissão `Administrador` para mim poder estar usando das minhas funcionalidades incríveis.')
      }

      const args = message.content.slice(prefix.length).trim().split(/ +/g)
      const cmd = args.shift().toLowerCase()

      const command = this.commands.find(({name, aliases}) => name === cmd || aliases.includes(cmd))

      const context = new CommandContext(message, args, cmd, prefix)

      if (command) command.preLoad(context)
    } catch (err) {
      console.log(err)
      if(err.message === "TypeError: Cannot read property 'systemAntiLinks' of null") return message.channel.send('Acabei de registrar esse servidor em meu banco de dados!')
    }
  }
}
