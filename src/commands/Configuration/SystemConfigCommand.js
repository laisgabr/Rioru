const { Command } = require('../../structure')

module.exports = class SystemConfigCommand extends Command {
  constructor(client) {
    super(client, {
      name: 'systemconfig',
      aliases: [],
      category: 'Configuration'
    })
  }
 async run ({ channel, member, guild }) {
    if(!member.permissions.has(["MANAGE_GUILD", "ADMINISTRATOR"])) {
      return channel.send('<:xSweet:756989900661850182> | Você não tem as permissões `Gerenciar Servidor` e `Administrador` para continuar')
    }
    const database = require('firebase').database()
    const db = await database.ref(`Servidores/${guild.id}/Configs`).once('value')

    let statusInvite = ""
    if(db.val().systemAntiInvite === true) statusInvite = '<:ativadoSweet:760564086135717898> | Ativado'
    if(db.val().systemAntiInvite === false) statusInvite = '<:desativadoSweet:760564236693798954> | Desativado'

    const { MessageEmbed } = require('discord.js')
   const embedInicio = new MessageEmbed()
     .setColor('PINK')
     .setThumbnail(this.client.user.displayAvatarURL({ format: "png" }))
     .setDescription(`
    Sistemas Disponíveis:
Para Gerenciar o Sistema de Anti Invite, Reaja com <:numero1Sweet:757455325405118526> .

Para Gerenciar o Sistema de Anti Caps-Lock Excessivo, Reaja com <:numero2Sweet:757455416920637550> .

Para Gerenciar o Sistema de Anti Links, Reaja com <:numero3Sweet:757455488089587812> .

Para Gerenciar o Sistema de Level, Reaja com

Para Gerenciar o Sistema de Entrada, Reaja com

Para Gerenciar o Sistema de Saida, Reaja com

Para Gerenciar o Sistema de Logs, Reaja com
     `)
   const embed = new MessageEmbed()
      .setDescription(`
    Status do Sistema Anti Invite:
${statusInvite}
Clique em
      `)
  }
}
