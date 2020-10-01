const { Command } = require('../../structure')

module.exports = class LyricsCommand extends Command {
  constructor(client) {
    super(client, {
      name: '',
      aliases: [],
      category: ''
    })
  }
  run ({ channel, args }) {
    const ftl = require('findthelyrics')

    const musica = args.join(' ')

    ftl.find(' ', `${musica}`, function(err, resp) {
      const { MessageEmbed } = require('discord.js')
    if(resp >= 1980) {
      const embedalta = new MessageEmbed()
        .setDescription(`
        Música ${musica}

        Letra:
        \n${resp.slice(0, 1960)}\n
        `)
        channel.send(embedalta)

      const embed2 = new MessageEmbed()
        .setDescription(`
         Música ${musica}

        Letra:
        \n${resp.slice(1960)}\n

        `)
      channel.send(embed2)
    }
      if(err) {
      console.log(err)
      return channel.send('Erro:' + err)
    }

    })

  }

}
