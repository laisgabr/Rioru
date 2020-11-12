const Command = require('../../Util/Command');

module.exports = class BanCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'ban',
            aliases: ['banir'],
            description: 'Membro comum te encheu o saco e fica divulgando na sua dm ? Bana ele',
            category: 'Moderation',
            UserPermission: ['BAN_MEMBERS']
        })
    }
    run(message, args, t) {
        if(!message.guild.me.permissions.has('BAN_MEMBERS')) {
            return message.channel.send('Não tenho a permissão de `Banir Membros`')
        }

        const user = message.mentions.users.first() || message.guild.users.cache.get(args[0]) || message.guild.users.cache.find(mem => mem.users.cache.find(args.join(' ')))

        if(user.id === message.author.id) return message.channel.send('Não posso te banir')

        if(user.id === message.guild.owner.id) return message.channel.send('Não dá pra banir o dono daqui :P')
    }
}