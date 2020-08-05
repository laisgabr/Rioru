module.exports.run = async(bot, message, args) => {
const msg = await message.channel.send('Tem certeza que você quer me desligar ?')
await msg.react('✅')
await msg.react('❌')
}
