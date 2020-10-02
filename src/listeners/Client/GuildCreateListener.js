const { Listener } = require('../../structure')

module.exports = class GuildCreateListener extends Listener {
    constructor () {
        super({
            name: 'guildCreate'
        })
        
    }
   async run (guild) {
       const database = require('firebase').database()
       const db = await database.ref(`Servidores/${message.guild.id}/Configs`).once('value')

       if(db.val() === null) {
          database.ref(`Servidores/${message.guild.id}/Configs`).set({
            prefix: "z!",
            systemAntiInvite: false,
            systemAntiCapsLock: false,
            systemAntiLinks: false,
            BemVindoStatus: false,
            BemVindoID: "undefined",
            MensagemBemVindo: `Olá {member}, Seja bem-vindo(a) a {guild.name}`,
            SaidaStatus: false,
            SaidaID: "undefined",
            SaidaMensagem: `{member} saiu do Servidor :(`,
            LogsStatus: false,
            LogsID: "undefined"
          })
       }
       const { MessageEmbed } = require('discord.js')

       const embed = new MessageEmbed()
       .setDescription(`
       Fui Adicionada em ${guild.name}(\`${guild.id}\`)

       Dono(a):
       ${guild.owner.user.tag}(\`${guild.owner.user.id}\`)

       Número de Membros:
       ${guild.memberCount}

       Agora temos ${this.client.guilds.cache.size} Servidores!
       `)
       .setColor('GREEN')
       .setThumbnail(guild.iconURL({ dynamic: true }))
       this.client.channels.cache.get("761378501130584074").send(embed)
   }
}
