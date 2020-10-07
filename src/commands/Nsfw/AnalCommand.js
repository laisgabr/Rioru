const { Command } = require('../../structure')

module.exports = class extends Command {
    constructor (client) {
        super(client, {
            name: 'anal',
            aliases: [],
            category: 'NSFW +18',
            nsfwChannelOnly: true
        })
    }
    run ({ channel, author }) {
    const superagent = require('superagent')
	const { MessageEmbed } = require('discord.js')

	superagent.get('https://nekobot.xyz/api/image')
	.query({ type: 'anal' })
	.end((err, response) => {
		const embed = new MessageEmbed()
       .setDescription(`Não consegue ver? [Clique aqui](${response.body.message})`)
        .setColor('RANDOM')
        .setThumbnail(author.displayAvatarURL({ dynamic: true }))
        .setImage(response.body.message)
		.setFooter(`Solicitado por ${author.username}`, author.displayAvatarURL({ dynamic: true, size: 2048 }))
	   channel.send(embed)
	})	 
    }
}
