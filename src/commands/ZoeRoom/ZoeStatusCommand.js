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
        if(message.guild.id !== "746434115682828469") return message.channel.send(`:x: Este comando apenas funciona em meu Servidor de Suoporte! [Clique Aqui](https://discord.gg/pKP96uH)`)
    
        if(message.member.roles.has('768171402905518201')) return message.member.roles.remove('768171402905518201') && message.channel.send(`:x: Você não poderá ser mais Notificado de meu Status. 😦`)
    
        message.member.roles.add('768171402905518201')
        return message.channel.send(':white_check_mark: Agora você sera __notificado__ sobre o **Status** da **Zoe**.')
    }
}