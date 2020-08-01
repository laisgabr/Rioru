module.exports.run = async(bot, message, args) => {
    const dizer = args.join(" ")
    message.channel.send(`***O <@${message.author.id}> mandou eu dizer..***   ` + dizer)
}