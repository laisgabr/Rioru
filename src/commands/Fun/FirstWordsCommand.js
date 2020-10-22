const Command = require('../../Util/Command')

module.exports = class FirstWordsCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'firstwords',
            aliases: ['pp', 'fw', 'primeiraspalavras'],
            description: 'Diga quais são as primeiras palavras do bebe',
            category: 'Fun'
        })
    }
    run(message, args, t) {
    const jimp = require("jimp")

    const img = jimp.read("https://cdn.discordapp.com/attachments/672188275963854879/709074434283143208/PrimeirasPalavras2.png")
    
    if (!args.join(' ')) return message.channel.send(t('errors:FirstWord.notHasArguments'))
    
    img.then(image => {
    jimp.loadFont(jimp.FONT_SANS_32_BLACK).then(font => {
    
        image.resize(485, 450)
    
        image.print(font, 10, 230, args.join(' '), 330)
    
        image.getBuffer(jimp.MIME_PNG, (i) => {
    
        message.channel.send({ files: [{ attachment: i, name: 'FirstWordsByZoeBot.png' }] })
        })
      })
    })
   }
}