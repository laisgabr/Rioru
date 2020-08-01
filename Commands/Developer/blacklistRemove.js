module.exports.run = async(bot, message, args) => {
        try {
        const db = require('quick.db')
        const config = require('./config.json')
        let blacklisted = message.mentions.members.first() || message.guild.members.cache.get(args[1]);
        if(message.author.id !== config.ownerid) return message.reply("Apenas pessoas especiais podem usar esse Comando :3")
        let blacklist = await db.fetch(`blacklist_${blacklisted.id}`)
        db.delete(`blacklist_${blacklisted.id}`)
        if(!blacklisted) return message.reply("Diga um id ou mencione alguém!")
        message.channel.send(`${blacklisted.username} foi desbanido! Não descumpra as regras novamente!`)
        } catch (err) {
          console.error("Erro:  " + err)
          const Discord = require('discord.js')
          const embedErr = new Discord.MessageEmbed()
          .setTitle(`Event Log`)
          .setColor("RED")
          .addField(`Houve um erro ao executar o Comando BlackListRemove`, `Desculpe pela inconveniencia :pensive:`)
          .addField(`Erro: `, `${err}`)
          .setTimestamp()
          .setFooter(`Solicitado por ${message.author.username}`, message.author.displayAvatarURL({ dynamic: true, size: 2048 }))
          return message.channel.send(embedErr)
        }
      }