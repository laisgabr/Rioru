module.exports.run = async(bot, message, args, queue) => {
    try {
    const args = message.content.split(" ")
    const queue = message.bot.queue.get(message.guild.id)
    
    const voiceChannel = message.member.voice.channel;
    if (!voiceChannel) return message.channel.send(`Por Favor <@${message.author.id}>, Entre em um canal de voz para continuar!`)
     
    } catch (err) {
        console.error("Erro:  " + err)
    }
}