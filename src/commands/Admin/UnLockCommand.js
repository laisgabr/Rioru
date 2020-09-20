/* eslint-disable quotes */
/* eslint-disable lines-between-class-members */
/* eslint-disable no-trailing-spaces */
/* eslint-disable indent */
const { Command } = require('../../structure')

module.exports = class extends Command {
    constructor (client) {
        super(client, {
            name: 'unlock',
            aliases: ['destravar', 'destrancar', 'desbloqueiar'],
            category: 'Administration'
        })
    }
   async run ({ channel, guild, member, author, mentions, args }) {
    const Discord = require('discord.js')           
    
    const canal = mentions.channels.first() || guild.channels.cache.get(args[0]) || channel

  if (!member.hasPermission(["MANAGE_MESSAGES", "MANAGE_CHANNELS"])) {
  return channel.send(`<@${author.id}>, Você não tem as Permissões ``Gerenciar Mensagens e Gerenciar Canais`` para continuar!`)
  } else if (!guild.me.permissions.has(["MANAGE_MESSAGES", "MANAGE_CHANNELS"])) {
  return channel.send("Eu não tenho a Permissões ``Gerenciar Mensagens e Gerenciar Canais`` para continuar")
  } else {              
   await canal.updateOverwrite(guild.roles.everyone, {
      SEND_MESSAGES: true
})
  
  const embedLock = new Discord.MessageEmbed()
  .setTitle(`<a:verificado_fs:733872377569607773> Canal Desbloqueado com Sucesso!!`)
  .setColor("RED")
  const msg = await canal.send(embedLock)
  await msg.react('🍪')
    }
  }
}
