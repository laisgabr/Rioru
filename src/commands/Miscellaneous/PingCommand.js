/* eslint-disable no-undef */
/* eslint-disable indent */
/* eslint-disable no-trailing-spaces */
/* eslint-disable quotes */
const { Command } = require('../../structure')

module.exports = class PingCommand extends Command {
  constructor (client) {
    super(client, {
      name: 'ping',
      aliases: ['latency', 'latencia'],
      description: 'Mostra o meu ping',
      usage: '<prefix>ping',
      category: 'Miscellaneous'
    })
  }

 async run ({ channel, author, client, message }) {
    const { MessageEmbed } = require("discord.js")
      
      const embedB = new MessageEmbed()
      .setColor("RED")
      .setThumbnail(client.user.displayAvatarURL({ dynamic: true, size: 4096 }))
      // .addField(`🏓 Minha Latência é de`, `${m.createdTimestamp - m.createdTimestamp + i} ms`)
      .addField(`📡 Latência Da API é de`, `${Math.round(client.ws.ping)} ms`)
      .setFooter(`Solicitado por ${author.username}`, author.displayAvatarURL({ dynamic: true, size: 2048 }))

      channel.send(embedB)
  }
}
