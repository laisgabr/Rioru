const { Command } = require('../../structure')

module.exports = class extends Command {
    constructor (client) {
        super(client, {
            name: 'unban',
            aliases: ['desbanir'],
            category: 'Moderation'
        })
    }
   async run ({ channel, member, guild, args }) {
        if(!member.hasPermission(["BAN_MEMBERS", "ADMINISTRATOR"])) {
          return channel.send("<:xSweet:756989900661850182> | **Você não tem permissão para desbanir**")
        }

    if(!args[0]) return channel.send("<:xSweet:756989900661850182> | Coloque um id valido");

    let bannedMember;

    try {
        bannedMember = await this.client.users.fetch(args[0])
    } catch (e) {
        if (!bannedMember) return channel.send("<:xSweet:756989900661850182> | **Esse id não é valido**")
    }

    try {
            await guild.fetchBan(args[0])
        } catch (e) {
            channel.send('<:xSweet:756989900661850182> | **Esse usuario não está Banido**')
            return
        }

    let reason = args.slice(1).join(" ")
    if(!reason) reason = "Motivo Indefinido"

    if(!guild.me.hasPermission(["BAN_MEMBERS", "ADMINISTRATOR"])) return channel.send("<:xSweet:756989900661850182> | **Não posso fazer isso sem a Permissão `Banir Membros` e `Administrador` **")

    try {
        guild.members.unban(bannedMember, { reason: reason })
        channel.send(`${bannedMember.tag} foi desbanido`)
    } catch (e) {
        console.log(e.message)
    }
   }
}
