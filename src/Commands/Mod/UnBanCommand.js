module.exports = {
	config: {
		name: 'unban',
		aliases: ['desbanir'], 
        description: "",
		category: "Mod"
	},
    run: async (client, message, args) => {
    if(!message.member.hasPermission(["BAN_MEMBERS", "ADMINISTRATOR"])) return message.channel.send("**Você não tem permissão para desbanir**")

    if(!args[0]) return message.channel.send("Coloque um id valido"); 

    let bannedMember;

    try{                                                            
        bannedMember = await bot.users.fetch(args[0])
    }catch(e){
        if(!bannedMember) return message.channel.send("**Esse id não é valido**")
    }

    try {
            await message.guild.fetchBan(args[0])
        } catch(e){
            message.channel.send('**Esse usuario não esta Banido** <:poha:734448071785709599>');
            return;
        }

    let reason = args.slice(1).join(" ")
    if(!reason) reason = "Motivo Indefinido"

    if(!message.guild.me.hasPermission(["BAN_MEMBERS", "ADMINISTRATOR"])) return message.channel.send("**Não posso fazer isso sem a Permissão `Banir Membros` e `Administrador` **")
    message.delete()
    try {
        message.guild.members.unban(bannedMember, {reason: reason})
        message.channel.send(`${bannedMember.tag} foi desbanido. Mas estou esperta em Huumm`)
    } catch(e) {
        console.log(e.message)
    }
    }
}