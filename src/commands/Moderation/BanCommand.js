const Command = require('../../Util/Command');

module.exports = class BanCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'ban',
            aliases: ['banir'],
            description: '',
            category: '',
            UserPermission: ['BAN_MEMBERS']
        })
    }
    run(message, args, t) {
        if(message.guild.me.permissions.has('BAN_MEMBERS')) {
            return message.channel.send('Não tenho a permissão de `Banir Membros`')
        }

        const user = message.mentions.users.first() || message.guild.users.cache.get(args[0]) || message.guild.users.find(mem => mem.users.cache.find(args.join(' ')))
    }
}