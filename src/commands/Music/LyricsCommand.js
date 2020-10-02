const { Command } = require('../../structure')

module.exports = class LyricsCommand extends Command {
  constructor(client) {
    super(client, {
      name: 'lyrics',
      aliases: [],
      category: ''
    })
  }
  run ({ channel, args }) {
   /* const ftl = require('findthelyrics')

    const musica = args.join(' ')
    if(!musica) return channel.send('Diga o nome de uma música!')

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
     return channel.send(embed2)
    }
    const embed1 = new MessageEmbed()
    .setDescription(`
    Música ${musica}

 Letra:
 \n${resp.slice(1960)}\n
`)
channel.send(embed1)
      if(err) {
      console.log(err)
      return channel.send('Erro:' + err)
    }

    })
    */ 

  }

}
