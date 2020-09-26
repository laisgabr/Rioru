const { Command } = require('../../structure')

module.exports = class HelpCommand extends Command {
  constructor (client) {
    super(client, {
      name: 'ajuda',
	    aliases: ['help'],
      description: 'Lista todos os meus comandos',
      usage: '<prefix>ajuda',
      category: 'Miscellaneous'
    })
  }

  async run ({ channel, client, author }) {
    const { MessageEmbed } = require('discord.js');

    const commands = this.client.commands.filter(({ hide, Developer }) => !hide && !Developer)
    const commandPerCategory = (category) => commands.filter(cmd => cmd.category === category)
    const mapCommand = (command) => `\`${command.name}\`, \`${command.aliases}\`, \`${command.usage}\`, \`${command.category}\``


    const EmbedAjuda = new MessageEmbed()
		 .setTitle(`Olá meu nome é SweetBot e sou um bot feito para lhe ajudar em tudo!`)
		 .setColor("BLUE")
		 .setThumbnail(client.user.displayAvatarURL({ dynamic: true, size: 2048 }))
      .setDescription(`
      👥 | Administração [${commandPerCategory('Admin').size}]
      ${commandPerCategory('Admin').map(mapCommand).join(', ')}

      😂 | Diversão [${commandPerCategory('Fun').size}]
      ${commandPerCategory('Fun').map(mapCommand).join(', ')}

      👮‍♂️| Moderação [${commandPerCategory('Moderation').size}]
      ${commandPerCategory('Moderation').map(mapCommand).join(', ')}

      🎵 | Música [${commandPerCategory('Music').size}]
      ${commandPerCategory('Music').map(mapCommand).join(', ')}

      🔞 | Nsfw [${commandPerCategory('NSFW +18').size}]
      ${commandPerCategory('NSFW +18').map(mapCommand).join(', ')}

      🛠️ | Utilitários [${commandPerCategory('Miscellaneous').size}]
      ${commandPerCategory('Miscellaneous').map(mapCommand).join(', ')}
      `)
		 .setFooter(`Solicitado por ${author.username}`, author.displayAvatarURL({ dynamic: true, size: 2048 }))
	   channel.send(EmbedAjuda)
  }
}
