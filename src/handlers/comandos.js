const { readdirSync } = require('fs'); // precisa do fs instalado ( npm i fs )

module.exports = (client) => {

    const load = dirs => {

        const commands = readdirSync(`./src/Commands/${dirs}/`).filter(d => d.endsWith('.js'));

        for (let file of commands) {
            const comando = require(`../Commands/${dirs}/${file}`);
            client.commands.set(comando.config.name, comando);
            
            if (comando.config.aliases) comando.config.aliases.forEach(a => client.aliases.set(a, comando.config.name));
        };
    };
    ["Ajuda","Ajuda","Developer","Developer","Miscelanea","Miscelanea","Nsfw","Nsfw","Music","Music"].forEach(x => load(x)); 
    
}