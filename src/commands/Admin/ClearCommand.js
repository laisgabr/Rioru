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
            category: 'Administration'
        })
    }
   async run ({ channel, member, guild, args }) {
  if (!member.permissions.has("MANAGE_MESSAGES")) return channel.send("Você precisa da Permissão `Gerenciar Mensagens` para usar esse comando")
  if (!guild.me.permissions.has("MANAGE_MESSAGES")) return channel.send('Não tenho a permissão `Gerenciar Mensagens` para continuar')
  const deleteCount = parseInt(args[0], 10)
  if (!deleteCount || deleteCount < 1 || deleteCount > 99) return channel.send("Forneça até **99 mensagens** para serem excluídas")

  const fetched = await channel.messages.fetch({
    limit: deleteCount + 1
  })
  channel.bulkDelete(fetched)
  channel.send(`**${args[0]} mensagens limpas nesse chat!**`).then(msg => msg.delete({ timeout: 5000 }))
    .catch(error =>
      console.log(`Não foi possível deletar mensagens devido a: ${error}`)
    )
    }
}
