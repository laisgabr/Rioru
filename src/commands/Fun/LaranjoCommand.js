/* eslint-disable quotes */
/* eslint-disable indent */
const { Command } = require('../../structure')

module.exports = class LaranjoCommand extends Command {
    constructor (client) {
        super(client, {
            name: 'laranjo',
            aliases: [],
            category: 'Fun'
        })
    }
    // eslint-disable-next-line lines-between-class-members
    run ({ channel, args }) {
        const jimp = require('jimp')

        var img = jimp.read("https://cdn.discordapp.com/attachments/554048737648050179/610011657632219147/laranjo-meme-cke.jpg")
        if (!args[0]) return channel.send("Indique o que laranjo deve falar.")
        img.then(image => {
            jimp.loadFont(jimp.FONT_SANS_32_BLACK).then(font => {
                image.resize(685, 494)
                image.print(font, 20, 30, args.join(" "), 600)
                // eslint-disable-next-line handle-callback-err
                image.getBuffer(jimp.MIME_PNG, (err, i) => {
                    channel.send({ files: [{ attachment: i, name: "laranjo.png" }] })
                })
            })
        })
    }
}
