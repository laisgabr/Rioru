module.exports.run = async(bot, message, args) => {
const config = require('../../config.json')
if(message.author.id !== config.OwnerID) return message.reply('Sem Permissão')
const msg = await message.channel.send('Tem certeza que você quer me desligar ?')
await msg.react('✅')
await msg.react('❌')

   const ss = (reaction, user) => reaction.emoji.name === '✅' && user.id === message.author.id;
   const nn = (reaction, user) => reaction.emoji.name === '❌' && user.id === message.author.id;
  
   const sim = msg.createReactionCollector(ss)
   const nao = msg.createReactionCollector(nn)

sim.on('collect', async r => {
  message.delete()
  message.channel.send('Ok, Estou desligando')
  process.exit()
});

nao.on('collect', async r => {
  message.delete()
message.channel.send('Obrigada! :3')
});
}
