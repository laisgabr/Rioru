const { Command } = require('../../structure')

module.exports = class ConfigsCommand extends Command {
  constructor(client) {
    super(client, {
      name: 'configs',
      aliases: [],
      category: 'Configuration'
    })
  }
  run ({ channel, member, author }) {
    if(!member.permissions.has(["MANAGE_GUILD", "ADMINISTRATOR"])) {
      return channel.send('<:xSweet:756989900661850182> | Você não tem as permissões `Gerenciar Servidor` e `Administrador` para continuar')
    }
    channel.send('Qual sistema você quer gerenciar ? [bem vindo/level/saida/logs]')

    const { MessageEmbed, MessageCollector } = require('discord.js')

    let filter = (user) => user.author.id === author.id;
    let collector = new MessageCollector(channel, filter, { max: 1, time: 200000 })

    collector.on('collect', r => {
  channel.send(collector.collected.first().content)
    })
  }
}
