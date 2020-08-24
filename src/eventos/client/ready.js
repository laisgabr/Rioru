module.exports = async client => {
    const print = console.log

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
        print("Carregando Evento Ready e Message...")
        print(`Carregando Comandos...`);
        print(`Logada como ${client.user.tag}`);
        let status = [
            `Meu prefixo é ya! :D`,
            `Sabia que tenho um sistema de músicas em desenvolvimento ?`,
            `Me ajude por favor ,w,`,
            `Amo todos que usam minha beta diariamente :)`,
            `Estou sendo desenvolvida pelo MrGamingBR#0001 esse lindo :3`,
            `Estou na versão Beta qualquer erro ou bug relate no Suporte`,
            `Open Source ? Sim!`,
            `Deixei de ser Beta mas ainda falta muita coisa .-.`
        ],
        i = 0;
    setInterval(() => client.user.setActivity(`${status[i++ % status.length]}`, {
        type: "STREAMING",
        url: "https://www.twitch.tv/mrgamingbr0001"
    }), 1000 * 60);
};