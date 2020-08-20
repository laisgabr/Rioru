module.exports.run = async(bot, message, args) => {
const { MessageEmbed } = require('discord.js')
const embed = new MessageEmbed()
.setDescription("``")
.addField("Total de Comandos(`14`) :", "`4k`,`anal`,`ass`,`blowjob`,`boobs`,`gif`,`hentai`,`holo`,`lewd`,`maid`,`pussy`,`thigh`,`trap`,`yuri`")
.setFooter()
message.channel.send(embed)
}
