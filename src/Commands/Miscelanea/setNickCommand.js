module.exports = {
	config: {
		name: 'setNick',
		aliases: ['setNickname', 'setarNick', 'setarNickname'], 
        description: "",
		category: "Miscelanea"
	},
    run: async (client, message, args) => {
    let newnick = args.join(" ")
    if(!message.guild.me.permissions.has("MANAGE_NICKNAMES")) {
        return message.reply("Não tenho a Permissão ``Gerenciar Apelidos`` para fazer isso!")
    }

    if(!newnick) return ("Isso não parece ser um nickname")
    message.guild.members.cache.get(message.author.id).setNickname(newnick)
    return message.reply("Seu nickname deve ter sido setado")
    }
}