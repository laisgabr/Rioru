const Command = require('../../Util/Command')

module.exports = class extends Command {
	constructor(client) {
		super(client, {
			name: '',
			aliases: [],
			category: 'Nsfw'
		})
	}
	run(message, args, t) {
		
	}
}