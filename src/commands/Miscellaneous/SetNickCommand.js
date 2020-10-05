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
   let uuser = mentions.users.first() || guild.members.cache.get(args[0]) || author

      const newnick = args.slice(1).join(' ')

      if (!member.permissions.has("ADMINISTRATOR")) {
    uuser = author
    } else {
        uuser = mentions.users.first() || author
        if (!uuser) {
         uuser = author
        }
    }

    if (!guild.me.permissions.has("MANAGE_NICKNAMES")) {
    return channel.send("<:xSweet:756989900661850182> | Não tenho a Permissão ``Gerenciar Apelidos`` para fazer isso!")
    }

    if (!newnick) return channel.send("<:xSweet:756989900661850182> | Use <prefix>setnick (Menção/Se n tiver vai ser o seu) <novoNome>")
    guild.members.cache.get(uuser.id).setNickname(newnick).catch(err => {
        console.log(err)
        return channel.send(err)
    })
  }
}
