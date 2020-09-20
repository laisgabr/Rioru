const { Command } = require('../../structure')

module.exports = class extends Command {
    constructor (client) {
        super(client, {
            name: 'unmute',
            aliases: ['desmutar'],
            category: 'Moderation'
        })
    }
   async run ({ channel, member, mentions, guild, args }) {
        if(!member.hasPermission(["MANAGE_MESSAGES", "ADMINISTRATOR"])) return channel.send("Você não tem as permissões Gerenciar Mensagens e Administrador")

        let mutado = mentions.users.first() || guild.members.cache.get(args[0])
        if(!mutado) return channel.send("Por favor mencione ou diga o id alguém!")

        let cargo = guild.roles.cache.find(c => c.name === "Mutado")
        
        if(!mutado.roles.cache.some(c2 => c2.name === 'Mutado')) return channel.send("Esse úsuario não está mutado!")

        await mutado.roles.remove(cargo)
        channel.send(`O Usuário ${mutado} foi desmutado`)
    }
}
