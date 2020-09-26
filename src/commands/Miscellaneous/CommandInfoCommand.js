const { Command } = require('../../structure')

module.exports = class CommandInfoCommand extends Command {
  constructor(client) {
    super(client, {
      name: 'commandinfo',
      aliases: [],
      category: 'Miscellaneous'
    })
  }
 async run ({ channel, args }) {
    const argument = args[0].toLowerCase()
    if(!argument) return channel.send('<:xSweet:756989900661850182> | Você não disse um comando')

   const commands = this.client.commands.filter(({ hide, Developer }) => !hide && !Developer)

   const mapCommand = (command) => `
    Nome:
    \`${command.name}\`,

    Outras formas de usar(aliases):
    \`${command.aliases}\`,

    Forma de Usar:
    \`${command.usage}\`,

    Categoria:
    \`${command.category}`

    const { MessageEmbed } = require('discord.js')
    const embed = new MessageEmbed()
      .setTitle('Comando ' + command.name)
      .setDescription(`${mapCommand}`)
    channel.send(embed)
  }
}
