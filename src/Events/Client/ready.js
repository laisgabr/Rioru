module.exports = async client => {
    const print = console.log
    const { GorilinkManager } = require('gorilink')
 
    const nodes = [
      {
        tag: 'PalmeirasSemMundial',
        host: 'localhost',
        port: 2333,
        password: 'team'
      }
    ]
      client.music = new GorilinkManager(client, nodes)
        
        .on('nodeConnect', node => {
          console.log(`${node.tag || node.host} - Lavalink conectado com Sucesso.`)
        })
        .on('trackStart', (player, track) => {
          player.textChannel.send(`Tocando agora: \`${track.info.title}\``)
        })

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