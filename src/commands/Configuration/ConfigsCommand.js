const { Command } = require('../../structure')

module.exports = class ConfigsCommand extends Command {
  constructor(client) {
    super(client, {
      name: 'configs',
      aliases: [],
      category: 'Configuration'
    })
  }
 async run ({ channel, member, author, guild }) {
    if(!member.permissions.has(["MANAGE_GUILD", "ADMINISTRATOR"])) {
      return channel.send('<:xSweet:756989900661850182> | Você não tem as permissões `Gerenciar Servidor` e `Administrador` para continuar')
    }
    channel.send('Qual sistema você quer gerenciar ? [bem vindo/level/saida/logs]')

    const db = require('firebase').database()

   const dbb = await db.ref(`Servidores/${guild.id}/Configs`).once('value')

    const { MessageEmbed, MessageCollector } = require('discord.js')

    let filter = (user) => user.author.id === author.id;
    let collector = new MessageCollector(channel, filter, { max: 1, time: 200000 })

    collector.on('collect', r => {
      if (r.content === 'level') {


      const embedBemvindo = new MessageEmbed()
        .setTitle('kk')
        .setDescription(`
       Status do Sistema de Level:

       `)
      channel.send(embedBemvindo)
    }
      channel.send(r.content)
    })
  }
}
