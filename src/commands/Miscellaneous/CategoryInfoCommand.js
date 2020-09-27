const { Command } = require('../../structure')

module.exports = class CategoryInfoCommand extends Command {
  constructor(client) {
    super(client, {
      name: 'categoryinfo',
      aliases: [],
      category: 'Miscellaneous'
    })
  }

  async run({channel, args}) {
    const { MessageEmbed } = require('discord.js')

    const commands = this.client.commands.filter(({ hide, Developer }) => !hide && !Developer)
    const commandPerCategory = (category) => commands.filter(cmd => cmd.category === category)
    const mapCommand = (command) => `
    Nome do Comando:
    \`${command.name}\`

    Outra forma de usar(aliases):
    \`${command.aliases}\`
    `
    const argument = args.join(' ').toLowerCase()

    if(argument === 'admin' || argument === 'administração') {
      const embedAdm = new MessageEmbed()
        .setTitle(`👥 | Administração`)
        .setColor('BLACK')
        .setDescription(`
        Total de Comandos[${commandPerCategory('Admin').size}]:

      ${commandPerCategory('Admin').map(mapCommand).join(' ')}
        `)
      return channel.send(embedAdm)
    }

    if(argument === 'fun' || argument === 'diversão') {
      const embedFun = new MessageEmbed()
        .setTitle(`😂 | Diversão`)
        .setDescription(`
        Total de Comandos[${commandPerCategory('Fun').size}]:

      ${commandPerCategory('Fun').map(mapCommand).join(' ')}
        `);

      const embedFun2 = new MessageEmbed()
        .setTitle(`😂 | Diversão Parte 2`)
        .setDescription(`
        Total de Comandos[${commandPerCategory('Fun').size}]:

      ${commandPerCategory('Fun').map(mapCommand).join(' ')}
        `)
      channel.send(embedFun).then(msg => msg.delete({ timeout: 1800000 }))
    return channel.send(embedFun2).then(msg => msg.delete({ timeout: 1800000 }))
    }

  if (argument === 'utilitarios' || argument === 'utilitários' || argument === 'miscellaneous') {
    const embedMisc = new MessageEmbed()
      .setTitle(`🛠️ | Utilitários`)
      .setDescription(`
        Total de Comandos[${commandPerCategory('Miscellaneous').size}]:

      ${commandPerCategory('Miscellaneous').map(mapCommand).join(' ')}
        `);
    return channel.send(embedMisc)

  }

    if (argument === 'moderação' || argument === 'mod') {
      const embedMod = new MessageEmbed()
        .setTitle(`👮‍♂️ | Moderação`)
        .setDescription(`
        Total de Comandos[${commandPerCategory('Moderation').size}]:

      ${commandPerCategory('Moderation').map(mapCommand).join(' ')}
       `)
      return channel.send(embedMod)
    }

    if (argument === 'music' || argument === 'música' || argument === 'musica') {
      const embedMusic = new MessageEmbed()
        .setTitle(`🎵 | Música`)
        .setDescription(`
        Total de Comandos[${commandPerCategory('Music').size}]:

      ${commandPerCategory('Music').map(mapCommand).join(' ')}
        `)
      return channel.send(embedMusic)
    }

    if(argument === 'nsfw' || argument === 'nsfw +18') {
     const embedNSFW = new MessageEmbed()
       .setTitle('🔞 | NSFW')
       .setDescription(`
       Total de Comandos[${commandPerCategory('NSFW +18').size}]:

      ${commandPerCategory('NSFW +18').map(mapCommand).join(' ')}
       `)
      return channel.send(embedNSFW)
    }
    if (!argument) return channel.send('<:xSweet:756989900661850182> | Diga uma categoria sendo [administração/diversão/moderação/música/nsfw/utilitarios] para continuar!')
  }
}
