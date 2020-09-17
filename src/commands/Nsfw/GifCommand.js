/* eslint-disable handle-callback-err */
/* eslint-disable no-tabs */
/* eslint-disable lines-between-class-members */
/* eslint-disable no-trailing-spaces */
/* eslint-disable indent */
const { Command } = require('../../structure')

module.exports = class extends Command {
    constructor (client) {
        super(client, {
            name: 'gif',
            aliases: ['pgif'],
            category: 'NSFW +18'
        })
    }
    run ({ channel, author }) {
        const superagent = require('superagent')
		const Discord = require('discord.js')
		
		if (channel.nsfw === true) {
			superagent.get('https://nekobot.xyz/api/image')
			.query({ type: 'pgif' })
			.end((err, response) => {
				const embed = new Discord.MessageEmbed()
				.setDescription(`Não consegue Ver o(a) Gif/Img? [Clique aqui](${response.body.message})`)
				.setImage(response.body.message)
				.setFooter(`Solicitado por ${author.username}`, author.displayAvatarURL({ dynamic: true, size: 2048 }))
				channel.send(embed)
			})
	} else {
        // eslint-disable-next-line quotes
        channel.send("Esse canal não é de NSFW +18")
    }
    }
}
