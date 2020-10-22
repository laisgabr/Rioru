const Command = require('../../Util/Command');
const emj = require('../../API/connectEmoji');

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
        if(message.guild.id !== "746434115682828469") return message.channel.send(`${emj.error} Este comando apenas funciona em meu Servidor de Suoporte! [Clique Aqui](https://discord.gg/pKP96uH)`)

        if(message.member.roles.has('768171764147683394')) return message.member.roles.remove('768171764147683394') && message.channel.send(`${emj.sucess} Você não poderá ser mais Notificado de meu Status. 😦`)

        message.member.roles.add('768171764147683394')
        return message.channel.send(emj.sucess + ' Agora você sera __notificado__ sobre todas as **Novidades** que irão acontecer.')
    }
}