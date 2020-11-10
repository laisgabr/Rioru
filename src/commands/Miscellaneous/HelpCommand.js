const Command = require('../../Util/Command');

module.exports = class HelpCommand extends Command {
    constructor(client) {
        super(client, {
            name: "help",
            aliases: ["ajuda"],
            category: "Miscellaneous",
            description: "Mostra todos os meus comandos"
        })
    }
    run(message, args, t) {
    const { MessageEmbed } = require('discord.js');

    const commandPerCategory = (category) => this.client.commands.filter(cmd => cmd.category === category)
    const mapCommand = (command) => `\`${command.name}\``


    const EmbedAjuda = new MessageEmbed()
      .setTitle(t('commands:Help.embedTitle'))
      .setThumbnail(this.client.user.displayAvatarURL({ format: "png" }))
      .setDescription(`
   👥 | ${t('commands:Help.embedDescriptionAdmin')} [${commandPerCategory('Admin').size}]
   ${commandPerCategory('Admin').map(mapCommand).join(', ')}

  😂 | ${t('commands:Help.embedDescriptionFun')} [${commandPerCategory('Fun').size}]
  ${commandPerCategory('Fun').map(mapCommand).join(', ')}

  👮‍♂️| ${t('commands:Help.embedDescriptionMod')} [${commandPerCategory('Moderation').size}]
  ${commandPerCategory('Moderation').map(mapCommand).join(', ')}

  🎵 | ${t('commands:Help.embedDescriptionMusic')} [${commandPerCategory('Music').size}]
  ${commandPerCategory('Music').map(mapCommand).join(', ')}

  🔞 | ${t('commands:Help.embedDescriptionNsfw')} [${commandPerCategory('NSFW +18').size}]
  ${commandPerCategory('NSFW +18').map(mapCommand).join(', ')}

  🛠️ | ${t('commands:Help.embedDescriptionUtils')} [${commandPerCategory('Miscellaneous').size}]
  ${commandPerCategory('Miscellaneous').map(mapCommand).join(', ')}
`)
      .setFooter(`${message.author.username}`, message.author.displayAvatarURL({ dynamic: true, size: 2048 }))
      message.channel.send(EmbedAjuda)
    }
}
