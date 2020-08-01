module.exports.run = async(bot, message, args) => {
    const ownerid = require('../../config.json') 
    if(message.author.id !== ownerid) return message.reply("Apenas Pessoas Especiais podem usar esse Comando")
}