module.exports.run = async(bot, message, args) => {
    const ownerid = require('../../config.json') 
  if(message.author.id !== ownerid) return message.reply("Apenas Pessoas Especiais podem usar esse Comando")
  let blacklisted = message.mentions.members.first() || message.guild.members.cache.get(args[1]);
  let blacklist = await db.fetch(`blacklist_${blacklisted.id}`)
  db.set(`blacklist_${blacklisted.id}`, true)
  if(!blacklisted) return message.reply("Diga um id ou mencione alguém!")
  message.channel.send(`<@${blacklisted.id}> Quem mandou quebrar as regras, Seu boboca!`) 
}
