const Command = require('../../Util/Command');

module.exports = class TranslateCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'translate',
            aliases: ['tradutor', 'traduzir'],
            description: 'Traduz algum texto',
            category: 'Miscellaneous'
        })
    }
    run(message, args, t) {
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

    if (!args[0]) return message.channel.send(`Use dessa forma: <prefix>traduzir <lingua>  <lingua> <mensagem>`)
  
    const msg = args.slice(2).join(' ');
    translate(msg, { from: args[0], to: args[1] }).then(res => {
      message.channel.send(`:earth_americas: | Texto traduzido de ${langs[args[0]]} para ${langs[args[1]]}: ${res.text}`)
    }).catch(err => {
      console.log(err)
      message.channel.send('Desculpe mas essa lingua não existe.')
    })
    }
}