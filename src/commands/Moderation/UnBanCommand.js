/* eslint-disable semi */
/* eslint-disable object-curly-spacing */
/* eslint-disable keyword-spacing */
/* eslint-disable quotes */
/* eslint-disable lines-between-class-members */
/* eslint-disable no-trailing-spaces */
/* eslint-disable indent */
const { Command } = require('../../structure')

module.exports = class extends Command {
    constructor (client) {
        super(client, {
            name: 'unban',
            aliases: ['desbanir'],
            usage: '',
            description: '',
            category: 'Moderation'
        })
    }
   async run ({ channel, member, guild, args }) {
        if(!member.hasPermission(["BAN_MEMBERS", "ADMINISTRATOR"])) {
          return channel.send("**Você não tem permissão para desbanir**")
        }

    if(!args[0]) return channel.send("Coloque um id valido"); 

    let bannedMember;

    try {                                                            
        bannedMember = await this.client.users.fetch(args[0])
    } catch (e) {
        if (!bannedMember) return channel.send("**Esse id não é valido**")
    }

    try {
            await guild.fetchBan(args[0])
        } catch (e) {
            channel.send('**Esse usuario não esta Banido**')
            return
        }

    let reason = args.slice(1).join(" ")
    if(!reason) reason = "Motivo Indefinido"

    if(!guild.me.hasPermission(["BAN_MEMBERS", "ADMINISTRATOR"])) return channel.send("**Não posso fazer isso sem a Permissão `Banir Membros` e `Administrador` **")
    
    try {
        guild.members.unban(bannedMember, {reason: reason})
        channel.send(`${bannedMember.tag} foi desbanido. Mas estou esperta em Huumm`)
    } catch (e) {
        console.log(e.message)
    }
   }   
}
