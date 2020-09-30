const { Command } = require('../../structure')

module.exports = class CommandInfoCommand extends Command {
  constructor(client) {
    super(client, {
      name: 'commandinfo',
      aliases: [],
      category: 'Miscellaneous'
    })
  }

  async run({ channel, args }) {
    const { MessageEmbed } = require('discord.js')

    const commands = this.client.commands.filter(({ hide, Developer }) => !hide && !Developer)
    const commandPerCategory = (name) => commands.filter(cmd => cmd.name === name)
    const mapCommand = (command) => `

    Outra forma de usar(aliases):
    ${command.aliases}

    Forma de Usar:
    ${command.usage}

    Categoria:
    ${command.category}

    `
    const mapComandinho = (command) => `${command.name}`;
    const argument = args.join(' ').toLowerCase()
    if (!argument) return channel.send('<:xSweet:756989900661850182> | Diga um nome de comando para continuar!')
   const embed = new MessageEmbed()
     .setDescription(`
     Informações sobre ${mapComandinho}
     ${mapCommand}
     `)
    channel.send(embed)
  }
}
