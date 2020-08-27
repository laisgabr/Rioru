module.exports = {
	config: {
		name: 'coins',
		aliases: ['moedas'], 
        description: "",
		category: "Economia"
	},
    run: async (client, message, args) => {
		/*
		const uuser = message.mentions.users.first() || client.users.cache.get(args[0]) || message.guild.members.cache.find(mem => mem.user.username === args.join(" "))
		if(!uuser) {
			uuser = message.author
		}
		*/
		message.channel.send("Comando em construção")
    }
}