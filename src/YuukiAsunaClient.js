const { Client, Collection } = require('discord.js');
const { token } = require("../config.json");
const client = new Client();

["commands", "aliases"].forEach(x => client[x] = new Collection());
["Commands", "Events"].forEach(x => require(`./Handlers/${x}`)(client));


client.login(token);
