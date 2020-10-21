const Command = require('../../Util/Command')

module.exports = class NotifyCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'notify',
            aliases: ['notificar'],
            description: 'q',
            category: 'ZoeRoom'
        })
    }
    run(message, args, t) {
        if(message.guild.id !== "746434115682828469") return message.channel.send('Esse comando está disponivel apenas para o meu Servidor de Suporte')

        if(message.member.roles.has('768171764147683394')) return message.member.roles.remove('768171764147683394') && message.channel.send(':sob: | Nunca mais confio em ninguém');

        message.member.roles.add('768171764147683394')
        return message.channel.send('Agora você vai ser Notificado(a) sobre todas as novidades :D')
    }
}