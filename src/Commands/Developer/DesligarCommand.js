module.exports = {
	config: {
		name: 'desligar',
		aliases: ['shutdown'], 
        description: "",
		category: "Developer"
	},
    run: async (client, message, args) => {
    
    if (!['468817505318862882', '738509296131637378', '330879828683390976', '336946966929866752'].includes(message.author.id)) {
    return message.channel.send('Some daq');
    };
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
    client.destroy()
    process.exit()
    });

    nao.on('collect', async r => {
    message.delete()
    message.channel.send('Obrigada! :3')
    });
    }
}