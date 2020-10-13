const { Command } = require('../../structure')

module.exports = class LocaleCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'locale',
            aliases: [],
            category: 'Admin'
        })
    }
   async run ({ channel, args, guild }) {
   const database = require('firebase').database()
return;
   const db = await database.ref(`Servidores/${guild.id}/Locale`).once('value')
    
   if(db.val() === null) {
        database.ref(`Servidores/${guild.id}/Locale`).set({ Language: "pt-BR" })
   }

   const lang = require(`../../locales/${db.val().Language}/Admin.json`)

   const langNova = args[0]
   if(!langNova) return channel.send()

   if(langNova === "pt-BR") {
       
    return channel.send('Agora eu irei falar Português do Brasil!') 
   } else if(langNova === "en-US") {

   } else {
       return channel.send()
   }

   channel.send("")
   }
}
