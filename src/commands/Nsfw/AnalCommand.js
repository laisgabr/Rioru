const { Command } = require('../../structure')

module.exports = class extends Command {
    constructor (client) {
        super(client, {
            name: 'anal',
            aliases: [],
            category: 'NSFW +18'
        })
    }
    run ({ channel, author }) {
        const superagent = require('superagent')
		const Discord = require('discord.js')

		if (channel.nsfw === true) {
			superagent.get('https://nekobot.xyz/api/image')
			.query({ type: 'anal' })
			.end((err, response) => {
				const embed = new Discord.MessageEmbed()
          .setDescription(`Não consegue ver? [Clique aqui](${response.body.message})`)
          .setColor('RANDOM')
          .setThumbnail(author.displayAvatarURL({ dynamic: true }))
          .setImage(response.body.message)
				.setFooter(`Solicitado por ${author.username}`, author.displayAvatarURL({ dynamic: true, size: 2048 }))
				channel.send(embed)
			})
		  } else {
      channel.send(`Por favor, Faça os passos do Gif caso queira usar esse comando!`, { files: [{ attachment: './Assets/NSFW.gif', name: 'NotSafeForWork.gif' }] })
		  }
    }
}
