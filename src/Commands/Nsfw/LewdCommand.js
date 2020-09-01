module.exports = {
	config: {
		name: 'lewd',
		aliases: [], 
        description: "",
		category: "Nsfw"
	},
    run: async (client, message, args) => {
		/*
		const superagent = require('superagent')
		const Discord = require('discord.js')
		
		if (message.channel.nsfw === true) {
			superagent.get('https://nekobot.xyz/api/image')
			.query({ type: 'lewd' })
			.end((err, response) => {
				const embed = new Discord.MessageEmbed()
			//  .setDescription(`Não consegue Ver o(a) Gif/Img? [Clique aqui](${response.body.message})`)
				.setImage(response.body.message)
				.setFooter(`Solicitado por ${message.author.username}`, message.author.displayAvatarURL({ dynamic: true, size: 2048 }))
				message.channel.send(embed);
			});
		  } else {
			message.channel.send("Esse canal não é de NSFW +18")
		  }
		  */
		 message.channel.send("Comando Desativado temporariamente!")
    }
}