const { Command } = require('../../structure')

module.exports = class extends Command {
    constructor (client) {
        super(client, {
            name: 'pp',
            aliases: ['primeiraspalavras'],
            usage: '',
            description: '',
            category: 'Fun'
        })
    }
    run ({ channel, args }) {
    const jimp = require("jimp")

    const img = jimp.read("https://cdn.discordapp.com/attachments/672188275963854879/709074434283143208/PrimeirasPalavras2.png")
    if (!args[0]) return channel.send("**Indique as Primeiras Palavras do Bebe.**")
    img.then(image => {
    jimp.loadFont(jimp.FONT_SANS_32_BLACK).then(font => {
    image.resize(485, 450)
    image.print(font, 10, 230, args.join(' '), 330)
    image.getBuffer(jimp.MIME_PNG, (i) => {
    channel.send({ files: [{ attachment: i, name: 'PrimeirasPalavras.png' }] })
    })
   })
  })
    }
}
