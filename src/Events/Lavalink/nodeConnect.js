module.exports = async (node, client) => {
    const erela = require("erela.js")
    const nodes = [
        {
          tag: 'Palmeiras', 
          host: 'localhost',
          port: 2333,
          password: 'team'
        },        
      ] 

    client.manager = new erela.ErelaClient(client, nodes)
    .on('nodeConnect', node => print(`Lavalink ligado.`))
    .on('nodeError', (node, err) => print("Deu erro:" + err.message))
    .on('trackStart', async (player, track) => {
            client.channels.cache.get(player.textChannel.id).send(`Tocando agora: ${track.title}...`);
        })
    
    .on('queueEnd', async player => {
        player.textChannel.send("Acabaram minhas músicas.");
        await client.manager.players.destroy(player.guild);
        await player.voiceChannel.leave();
    })
    .on('playerMove', (player, currentChannel, newChannel) => {
        player.voiceChannel = client.channels.cache.get(newChannel)
    });
    
}