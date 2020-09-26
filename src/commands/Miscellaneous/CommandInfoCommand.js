const { Command } = require('../../structure')

module.exports = class CommandInfoCommand extends Command {
  constructor(client) {
    super(client, {
      name: 'commandinfo',
      aliases: [],
      category: 'Miscellaneous'
    })
  }
  run ({ channel, args }) {
    const argument = args.join(' ')
    if(!argument) return channel.send('<:xSweet:756989900661850182> | Você não disse um comando')

    const command = this.commands.find(({ name, aliases }) => name === argument || aliases.includes(argument))
   if(!command) return channel.send('<:xSweet:756989900661850182> | Não achei um comando com o nome de ' + argument)

    const { MessageEmbed } = require('discord.js')
    const embed = new MessageEmbed()
      .setTitle('Comando ' + command.name )
      .setDescription(`
      Aliases (Outra forma de usar):
      ${command.aliases},

      Descrição:
      ${command.description},

      Forma de Usar:
      ${command.usage},

      Categoria:
      ${command.category}
      `)
    channel.send(embed)
  }
}
