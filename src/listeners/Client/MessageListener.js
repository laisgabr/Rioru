const { Listener, CommandContext } = require('../../structure')

module.exports = class MessageListener extends Listener {
  constructor () {
    super({
      name: 'message'
    })
  }

 async run (message) {
  if (message.author.bot || message.channel.type !== 'text') return

  const { MessageEmbed } = require('discord.js')
   
   const dbbb = await this.database.ref(`Servidores/${message.guild.id}/Configs`).once('value')

   if(dbbb.val() === null) {
   this.database.ref(`Servidores/${message.guild.id}/Configs`).set({
    prefix: "y!",
    BemVindoID: "undefined",
    MensagemBemVindo: `Olá {member}, Seja bem-vindo(a) a {guild.name}`,
    SaidaID: "undefined",
    SaidaMensagem: `{member} saiu do Servidor :(`,
    LogsID: "undefined"
  })
}

   let prefix = dbbb.val().prefix
   if (!prefix) {
     prefix = 'y!'
   }

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
       let mentioned = message.mentions.members.first();
  
  if (mentioned) {
    let status = await this.database.ref(`Global/AFK's/${mentioned.id}`).once('value')
    if (status.val() === null || status.val().AFK === null) {
      this.database.ref(`Global/AFK's/${mentioned.id}`).set({
        AFK: false
      })
    } 
    
    if (status.val().AFK === true) {
      const embed = new MessageEmbed()
      .setColor(0xffffff)
      .setDescription(`Esse usuário (${mentioned.user}) está AFK`)
      message.channel.send(embed).then(i => i.delete({ timeout: 7000 }));
    }
  }
  
 const proprioAuthor = await this.database.ref(`Global/AFK's/${message.author.id}`).once('value')
 if(proprioAuthor.val() === null || proprioAuthor.val().AFK === null) {
  this.database.ref(`Global/AFK's/${message.author.id}`).set({
    AFK: false
  })
}

 if (proprioAuthor.val().AFK === true) {
   message.channel.send(`${message.author}, Bem-Vindo(a) de Volta...`)
 }
   
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
            Enviadas: db.val().Enviadas + 1 - 24
          })
          message.channel.send(`Parabéns ${message.author}! Você upou para o Level ${db.val().level} :) .`)
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
   
   if (message.content === `<@747864108958875648>` || message.content === `<@!747864108958875648>` || message.content === '<@711341613930250330>' || message.content === '<@!711341613930250330>') return message.channel.send(`Olá <@${message.author.id}>,Meu nome é Sweet Bot e Meu prefixo é \`${prefix}\`, use \`${prefix}ajuda\` ou \`${prefix}info\` para mais Informações.`)

    if (!message.content.toLowerCase().startsWith(prefix)) return

    const args = message.content.slice(prefix.length).trim().split(/ +/g)
    const cmd = args.shift().toLowerCase()

    const command = this.commands.find(({ name, aliases }) => name === cmd || aliases.includes(cmd))
    
    const context = new CommandContext(message, args, cmd, prefix)

    if (command) command.preLoad(context)
  }
}
