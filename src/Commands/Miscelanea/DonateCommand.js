module.exports = {
	config: {
		name: 'donate',
		aliases: ['doar'], 
        description: "",
		category: "Miscelanea"
	},
    run: async (client, message, args) => {
        message.channel.send("Comando indisponivel no momento...")
    }
}