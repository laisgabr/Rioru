const { Client, Collection } = require('discord.js');
const { token } = require("../config.json");
const client = new Client();


["commands", "aliases"].forEach(x => client[x] = new Collection());
["comandos", "eventos"].forEach(x => require(`./handlers/${x}`)(client));


client.login(token);
