module.exports = {
	config: {
		name: 'pussy',
		aliases: [], 
        description: "",
		category: "Nsfw"
	},
    run: async (client, message, args) => {
        const superagent = require('superagent')
		const Discord = require('discord.js')
		
		if (message.channel.nsfw === true) {
			superagent.get('https://nekobot.xyz/api/image')
			.query({ type: 'pussy'})
			.end((err, response) => {
				const embed = new Discord.MessageEmbed()
				.setImage(response.body.message)
				.setFooter(`Solicitado por ${message.author.username}`, message.author.displayAvatarURL({ dynamic: true, size: 2048 }))
				message.channel.send(embed);
			});
		  } else {
			message.channel.send("Esse canal não é de NSFW +18")
		  }
    }
}