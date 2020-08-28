module.exports = {
	config: {
		name: 'say',
		aliases: ['falar', 'fale'], 
        description: "",
		category: "Miscelanea"
	},
    run: async (client, message, args) => {
		const dizer = args.join(" ")
		if(message.content === 'ya!say') {
			return message.channel.send(`***O <@${message.author.id}> mandou eu dizer nada '-'***`)
		}
		if(message.member.permissions.has("ADMINISTRATOR")) {
			return message.channel.send(dizer)
		}
    message.channel.send(`***O <@${message.author.id}> mandou eu dizer..***   ` + dizer)
    }
}