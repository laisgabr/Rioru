/* eslint-disable quotes */
/* eslint-disable lines-between-class-members */
/* eslint-disable no-trailing-spaces */
/* eslint-disable indent */
const { Command } = require('../../structure')

module.exports = class extends Command {
    constructor (client) {
        super(client, {
            name: 'clear',
            aliases: [],
            category: 'Admin'
        })
    }
   async run ({ channel, member, guild, args, author }) {
  if (!member.permissions.has("MANAGE_MESSAGES")) return channel.send("<:xSweet:756989900661850182> | Você precisa da Permissão `Gerenciar Mensagens` para usar esse comando")
  if (!guild.me.permissions.has("MANAGE_MESSAGES")) return channel.send('<:xSweet:756989900661850182> | Não tenho a permissão `Gerenciar Mensagens` para continuar')
  const deleteCount = parseInt(args[0], 10)
  if (!deleteCount || deleteCount < 1 || deleteCount > 99) return channel.send("<:xSweet:756989900661850182> | Forneça até **99 mensagens** para serem excluídas")

  const fetched = await channel.messages.fetch({
    limit: deleteCount + 1
  })
  channel.bulkDelete(fetched)
  channel.send(`<:checkSweet:757016162633646211> | ${args[0]} Mensagens foram apagadas por ${author} `).then(msg => msg.delete({ timeout: 5000 }))
    .catch(error =>
      console.log(`<:xSweet:756989900661850182> | Não foi possível deletar mensagens devido a: ${error}`)
    )
    }
}
