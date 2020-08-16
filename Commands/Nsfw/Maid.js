module.exports.run = async(bot, message, args) => {
const akaneko = require('akaneko')

const dc = require('discord.js')
const embed = new dc.MessageEmbed()
.setImage(akaneko.nsfw.maid())
message.channel.send(embed)
}
