const { Command } = require('../../structure')

module.exports = class TradutorCommand extends Command {
  constructor(client) {
    super(client, {
      name: 'tradutor',
      aliases: ['traduzir'],
      usage: '<prefix>traduzir pt <texto>',
      category: 'Miscellaneous'
    })
  }
  run ({ channel, args }) {
    const translate = require('@vitalets/google-translate-api');

    let langs = {
      "auto": "Automatic",
      "ar": "Arabe",
      "nl": "Holandes",
      "eng": "Inglês",
      "en": "Inglês",
      "fr": "Frances",
      "de": "Alemão",
      "el": "Grego",
      "it": "Italiano",
      "ja": "Japones",
      "jw": "Javanes",
      "kn": "Kannada",
      "ko": "Coreano",
      "pt": "Portugues",
      "ro": "Romano",
      "ru": "Russo",
      "es": "Espanhol"
    }

    if (!args[0]) {
      return channel.send(`Use dessa forma: <prefix>traduzir <lingua> + <lingua> <mensagem>`)
    }

    let msg = args.slice(2).join(' ');
    translate(msg, { from: args[0], to: args[1] }).then(res => {
      channel.send(`:earth_americas: | Texto traduzido de ${langs[args[0]]} para ${langs[args[1]]}: ${res.text}`)
    }).catch(err => {
      console.log(err)
      channel.send('Desculpe mas essa lingua não existe.')
    })
  }
}
