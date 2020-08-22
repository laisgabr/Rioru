const { readdirSync } = require('fs'); // também precisa de fs aqui (npm i fs)

module.exports = (client) => {

    const load = dirs => {

        const events = readdirSync(`./src/eventos/${dirs}/`).filter(d => d.endsWith('.js'));

        for (let file of events) {
            const event = require(`../eventos/${dirs}/${file}`);
            let eventName = file.split(".")[0];
            client.on(eventName, event.bind(null, client));
        };
    };
    ["client", "guild"].forEach(x => load(x)); // Dentro da pasta "client" coloque o evento ready (e outros, se quiser) e dentro da pasta guild coloque os eventos relacionados à guild em si. (Na verdade, tanto faz, é só uma questão de organização, pode até colocar todos os eventos na mesma pasta, se quiser.)
};