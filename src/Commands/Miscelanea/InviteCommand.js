module.exports = {
	config: {
		name: 'invite',
		aliases: ['convite'], 
        description: "",
		category: "Miscelanea"
	},
    run: async (client, message, args) => {
    const Discord = require('discord.js')
    const invite = "https://discord.com/api/oauth2/authorize?client_id=711341613930250330&permissions=8&scope=bot"

    const EmbedI = new Discord.MessageEmbed()
	.setDescription("Clique [Aqui](https://discord.com/api/oauth2/authorize?client_id=711341613930250330&permissions=8&scope=bot) para me Adicionar em seu Servidor")
	.setColor("RED")
    .setFooter(`Solicitado por ${message.author.username}`, message.author.displayAvatarURL({ size: 2048, dynamic: true }))

    message.channel.send(EmbedI)
    }
}