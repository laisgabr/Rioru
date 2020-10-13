const { Command } = require('../../structure')

module.exports = class extends Command {
    constructor (client) {
        super(client, {
            name: '4k',
            aliases: ['p4k'],
            category: 'NSFW +18',
            nsfwChannelOnly: true
        })
    }
   async run ({ channel, author, guild }) {
    const { MessageEmbed } = require('discord.js')
    const superagent = require('superagent')

    const database = require('firebase').database()

    const db = await database.ref(`Servidores/${guild.id}/Locale`).once('value')

    const lingua = db.val().Language

    const lang = require(`../../locales/${lingua}/Nsfw.json`)

	superagent.get('https://nekobot.xyz/api/image')
	.query({ type: '4k' })
	.end((err, response) => {
		const embed = new MessageEmbed()
		.setDescription(`[${lang.ver}](${response.body.message})`)
        .setColor('RANDOM')
        .setThumbnail(author.displayAvatarURL({ dynamic: true }))
        .setImage(response.body.message)
        .setFooter(lang.solicitado + ` ${author.username}`, author.displayAvatarURL({ dynamic: true, size: 2048 }))
		channel.send(embed)
	})
    }
}
