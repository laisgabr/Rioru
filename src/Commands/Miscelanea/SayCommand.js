module.exports = {
	config: {
		name: 'say',
		aliases: ['falar', 'fale'], 
        description: "",
		category: "Miscelanea"
	},
    run: async (client, message, args) => {
		const dizer = args.join(" ").slice(1)
		if(!dizer) {
			return message.channel.send("")
		}
    message.channel.send(`***O <@${message.author.id}> mandou eu dizer..***   ` + dizer)
    }
}