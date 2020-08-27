module.exports = {
	config: {
		name: 'blacklistAdd',
		aliases: ['asunaban'], 
        description: "",
		category: "Developer"
	},
    run: async (client, message, args) => {
		/* 
		const uuser = message.mentions.users.first() || client.users.cache.get(args[0]) || message.guild.members.cache.find(mem => mem.user.username === args.join(" "))
		if(!uuser) {
			return message.reply("Mencione alguém ou Diga o id ou diga um Username")
		}
		*/
		message.channel.send("Comando em construção")
    }
}