module.exports.run = async(bot, message, args) => {
    const genius = require('genius-lyrics')
    const config = require('../../config.json')
    const GENIU = require('../../config.json')
    const G = new genius.Client(config.GENIU)

    G.tracks.search(message.content.split(' ').slice(1).join(' '), {limit: 1})
    .then(results => {
        const song = results[0]
        message.channel.send(`**${song.title} - ${song.artist.name}**\n <${song.url}>`)
    })
    .catch(err => message.reply("Erro:  " + err))
}