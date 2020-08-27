module.exports = {
	config: {
		name: 'info',
		aliases: [], 
        description: "",
		category: "Developer"
	},
    run: async (client, message, args) => {
		const { MessageEmbed } = require('discord.js')

		const embed = new MessageEmbed()
		.setTitle(`Informações sobre Mim`)
		.setDescription(`
		 Total de Servidores : \`${client.guilds.cache.size} Servidores\`

Total de usuários: \`${client.users.cache.size} Usuários\`

Total de Canais: \`${client.channels.cache.size} Canais\`

Versão do Node: \`${process.version}\`

Versão do discord.js: \`v12.3.1\`

Latencia da API: \`${Math.round(client.ws.ping)}\`

Links Importantes:

[Me adicione em seu Servidor](https://discord.com/api/oauth2/authorize?client_id=711341613930250330&permissions=8&scope=bot)

[Servidor de Suporte](https://discord.gg/8eYxh49)`)
.setThumbnail(client.user.displayAvatarURL({ format: "png", dynamic: true }))
		.setFooter(message.author.username, message.author.displayAvatarURL({ dynamic: true, size: 2048 }))
		message.channel.send(embed)
	}
}