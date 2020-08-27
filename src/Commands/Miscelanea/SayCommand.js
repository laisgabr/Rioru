module.exports = {
	config: {
		name: 'say',
		aliases: ['falar', 'fale'], 
        description: "",
		category: "Miscelanea"
	},
    run: async (client, message, args) => {
		const dizer = args.join(" ").slice(1)
		if(!args[0]) {
			return message.channel.send(`***O <@${message.author.id}> mandou eu dizer nada '-'`)
		}
		if(message.member.permissions.has("ADMINISTRATOR")) {
			return message.channel.send(dizer)
		}
    message.channel.send(`***O <@${message.author.id}> mandou eu dizer..***   ` + dizer)
    }
}