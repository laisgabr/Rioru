const { Listener, CommandContext } = require('../../structure')
const { Collection } = require('discord.js')

module.exports = class MessageListener extends Listener {
  constructor () {
    super({
      name: 'message'
    })
  }

 async run (message) {
  if (message.author.bot || message.channel.type !== 'text') return

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
   if (prefix === null) {
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

    if (!message.content.toLowerCase().startsWith(prefix)) return;
   const cooldowns = new Collection();

   if (!cooldowns.has(this.commands.name)) {
     cooldowns.set(this.commands.name, new Collection());
   }

   const now = Date.now();
   const timestamps = cooldowns.get(this.commands.name);
   const cooldownAmount = (this.commands.cooldown || 3) * 1000;

   if (timestamps.has(message.author.id)) {
     const expirationTime = timestamps.get(message.author.id) + cooldownAmount;

     if (now < expirationTime) {
       const timeLeft = (expirationTime - now) / 1000;
       return message.channel.send(`Calma ai, espere ${timeLeft.toFixed(1)} segundo(s)`);
     }
   }
   timestamps.set(message.author.id, now);
   setTimeout(() => timestamps.delete(message.author.id), cooldownAmount);

    if (message.author.id === message.guild.owner.id) {

    if (!message.guild.me.permissions.has("ADMINISTRATOR")) message.channel.send('Por favor, me dê a Permissão `Administrador` para usar Todas as Minhas Funcionalidades!')

   }

    const args = message.content.slice(prefix.length).trim().split(/ +/g)
    const cmd = args.shift().toLowerCase()

    const command = this.commands.find(({ name, aliases }) => name === cmd || aliases.includes(cmd))

    const context = new CommandContext(message, args, cmd, prefix)

    if (command) command.preLoad(context)
  }
}
