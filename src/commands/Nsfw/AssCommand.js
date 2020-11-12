const { Command, ZoeEmbed } = require('../../Util')

module.exports = class extends Command {
	constructor(client) {
		super(client, {
			name: 'ass',
			aliases: [],
			category: 'Nsfw',
			nsfwChannelOnly: true
		})
	}
	run(message, args, t) {
		const gif = this.client.nsfw.getAss()

		const embed = new ZoeEmbed()
		.setDescription(`Não consegue ver ? [Clique aqui](${gif})`)
		.setImage(gif)
		message.channel.send(embed)
	}
}