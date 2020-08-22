module.exports = async client => {
   const { ErelaClient } = require('erela.js')

    client.music = new ErelaClient(client, [
        {
            host: "localhost",
            port: 2333,
            password: "team"
        }
    ])
    const print = console.log

    client.musicPlayers = new Map();
    print('Tentando carregar o node baiano do Lavalink');
    client.music.on("nodeConnect", node => print("Node Conectado! yay"));
    client.music.on("nodeError", (node, error) => print(`Node error: ${error.message}`));
    client.music.on("trackStart", (player, track) => player.textChannel.send(`Tocando agora: ${track.title}`));
    client.music.on("queueEnd", player => {
        player.textChannel.send("Lista de reprodução acabou!")
        client.music.players.destroy(player.guild.id);
    });
        console.log("Carregando Evento Ready e Message...")
        console.log(`Carregando Comandos...`);
        console.log(`Logada como ${client.user.tag}`);
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
