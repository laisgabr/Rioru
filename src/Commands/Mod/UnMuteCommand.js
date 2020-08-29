module.exports = {
	config: {
		name: 'unmute',
		aliases: ['desmutar'], 
        description: "",
		category: "Mod"
	},
    run: async (client, message, args) => {
        if(!message.member.hasPermission("MANAGE_MESSAGES", "ADMINISTRATOR")) return message.channel.send("Você não tem as permissões Gerenciar Mensagens e Administrador")

        let mutado = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
        if(!mutado) return message.channel.sendMessage("Por favor mencione ou diga o id alguém!");

        let cargo = message.guild.roles.cache.find(c => c.name === "Mutado")
        
        if(!mutado.roles.cache.some(c2 => c2.name === 'Mutado')) return message.channel.send("Esse úsuario não está mutado!");

        await mutado.roles.remove(cargo);
        message.channel.send(`O Usuário ${mutado} foi desmutado`);

        message.delete();

    }
}