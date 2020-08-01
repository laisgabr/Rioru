module.exports.run = async (bot, message, args) => { 

    if(!message.member.hasPermission(["BAN_MEMBERS", "ADMINISTRATOR"])) return message.channel.send("**Você não tem permissão para desbanir**<a:KomaHaatoFukkireta:734498341173461033>")

    if(!args[0]) return message.channel.send("Coloque um id valido"); 

    let bannedMember;

    try{                                                            
        bannedMember = await bot.users.fetch(args[0])
    }catch(e){
        if(!bannedMember) return message.channel.send("**Esse id não é valido** <:hm:699820106523475978>")
    }

    try {
            await message.guild.fetchBan(args[0])
        } catch(e){
            message.channel.send('**Esse usuario não esta Banido** <:poha:734448071785709599>');
            return;
        }

    let reason = args.slice(1).join(" ")
    if(!reason) reason = "Motivo Indefinido"

    if(!message.guild.me.hasPermission(["BAN_MEMBERS", "ADMINISTRATOR"])) return message.channel.send(" **Não posso fazer isso** <:02cry:734498007470309376>")
    message.delete()
    try {
        message.guild.members.unban(bannedMember, {reason: reason})
        message.channel.send(`${bannedMember.tag} foi desbanido. Mas estou esperta em Huumm <:GWowoKannaGun:734500505148981278>`)
    } catch(e) {
        console.log(e.message)
    }
}