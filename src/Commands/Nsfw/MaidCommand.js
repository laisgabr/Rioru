module.exports = {
	config: {
		name: 'maid',
		aliases: [], 
        description: "",
		category: "Nsfw"
	},
    run: async (client, message, args) => {
    if (message.channel.nsfw === true) {
        const akaneko = require('akaneko')
    const dc = require('discord.js')
    const embed = new dc.MessageEmbed()
    .setImage(akaneko.nsfw.maid())
    message.channel.send(embed)
    } else {
        return message.channel.send("Filtro de Conteudo adulto ativado e então não posso mandar as img/gif")
    }
    }
}