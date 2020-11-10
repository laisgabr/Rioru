const Command = require('../../Util/Command');

module.exports = class LaranjoCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'laranjo',
            aliases: [],
            description: 'Laranjo não sabe falar, diga algo pra ele',
            category: 'Fun'
        })
    }
    run(message, args, t) {
        const jimp = require('jimp')

        var img = jimp.read('./src/Assets/Laranjo.jpg')
        if (!args[0]) return message.channel.send(" | Indique o que laranjo deve falar.")
        img.then(image => {
            jimp.loadFont(jimp.FONT_SANS_32_BLACK).then(font => {
                image.resize(685, 494)
                image.print(font, 20, 30, args.join(" "), 600)
                image.getBuffer(jimp.MIME_PNG, (err, i) => {
                    message.channel.send({ files: [{ attachment: i, name: "LaranjoByZoeBot.png" }] })
                })
            })
        })
    }
}