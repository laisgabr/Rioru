
const { Command } = require('../../structure')

module.exports = class extends Command {
    constructor (client) {
        super(client, {
        name: 'unlock',
        aliases: ['destravar', 'destrancar', 'desbloqueiar'],
        category: 'Admin'
    })
  }
  async run ({ channel, guild, member, author, mentions, args }) {
  const Discord = require('discord.js')
  const canal = mentions.channels.first() || guild.channels.cache.get(args[0]) || channel

  if (!member.permissions.has(["MANAGE_MESSAGES", "MANAGE_CHANNELS"])) {
  return channel.send(`<:xSweet:756989900661850182> | Você não tem as Permissões ``Gerenciar Mensagens e Gerenciar Canais`` para continuar!`)
  } else if (!guild.me.permissions.has(["MANAGE_MESSAGES", "MANAGE_CHANNELS"])) {
  return channel.send("<:xSweet:756989900661850182> | Eu não tenho a Permissões ``Gerenciar Mensagens e Gerenciar Canais`` para continuar")
  } else {
  await canal.updateOverwrite(guild.roles.everyone, {
  SEND_MESSAGES: true
})

  const embedLock = new Discord.MessageEmbed()
  .setTitle(`<:checkSweet:757016162633646211> | Canal Desbloqueado com Sucesso!!`)
  .setColor("RED")
  const msg = await canal.send(embedLock)
  await msg.react('🍪')
  }
  }
}
