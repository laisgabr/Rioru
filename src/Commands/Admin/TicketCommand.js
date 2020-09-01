module.exports = {
    config: {
        name: "",
        aliases: [],
        description: '',
        category: ""
    },
    run: async(client, message, args) => {
        if (!message.guild.me.hasPermission('MANAGE_CHANNELS')) return message.channel.send('Não tenho permissão de gerenciar canais')
    if (message.guild.channels.cache.find(ch => ch.name.includes(message.author.id))) return message.reply('Já existe um canal criado pra você 🐒')
    
    let channel 
    try { 
        channel = await message.guild.channels
            .create(`${message.member.username}•${message.author.discriminator}┋${message.author.id}`,
                {permissionOverwrites: [{
                    id: message.guild.id,
                    deny: ['VIEW_CHANNEL'], 
                },
                {
                    id: message.author.id,
                    allow: ['VIEW_CHANNEL', 'SEND_MESSAGES'] 
                }]
            })
        }
    catch(err) {
        message.channel.send('Erro: ' + err.message) 
    }
        
        let timeout = await channel.send(`<@${message.author.id}>`)
            .catch(err => message.channel.send('Erro: ' + err.message))
        timeout.delete({timeout: 5000}) 
        setTimeout(() => channel.delete() 
            .then(c => message.channel.send(`\`Canal ${c.name} deletado ✅\``)) 
            .catch(err => message.channel.send('Erro: ' + err.message)), 1000 * 60) 
    }
}