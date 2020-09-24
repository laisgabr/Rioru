const { Command } = require('../../structure')

module.exports = class SetNickCommand extends Command {
    constructor (client) {
        super(client, {
            name: 'setnick',
            aliases: ['setnickname', 'setarnick', 'setarnickname'],
            description: 'Sete o Nickname seu ou de alguém',
            usage: '<prefix>setnick Bolacha',
            category: 'Miscellaneous'
        })
    }
    run ({ channel, args, guild, author, mentions, member }) {
    const newnick = args.join(' ')
    
   let uuser = mentions.users.first() || author

   if (!member.permissions.has("ADMINISTRATOR")) {
    uuser = author    
    } else {
        if (!uuser) {
         uuser = author
        }
    }

    if (!guild.me.permissions.has("MANAGE_NICKNAMES")) {
    return channel.send("<:xSweet:756989900661850182> | Não tenho a Permissão ``Gerenciar Apelidos`` para fazer isso!")
    }

    if (!newnick) return channel.send("<:xSweet:756989900661850182> | Use <prefix>setnick <novoNome>")
    guild.members.cache.get(uuser.id).setNickname(newnick).catch(err => {
        console.log(err)
        return channel.send(err)
    })
  }
}
