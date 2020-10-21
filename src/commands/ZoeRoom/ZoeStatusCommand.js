const Command = require('../../Util/Command')

module.exports = class ZoeStatusCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'zoestatus',
            aliases: ['status'],
            description: 'q',
            category: 'ZoeRoom'
        })
    }
    run(message, args, t) {
        if(message.guild.id !== "746434115682828469") return message.channel.send('Esse comando está disponivel apenas para o meu Servidor de Suporte')
    
        if(message.member.roles.has('768171402905518201')) return message.member.roles.remove('768171402905518201') && message.channel.send(':sob: | Achei que a gente era amigo(a)')
    
        message.member.roles.add('768171402905518201')
        return message.channel.send('Agora você será notificado(a) sobre meus status :thumbsup:')
    }
}