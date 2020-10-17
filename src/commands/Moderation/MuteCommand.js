const { Command } = require('../../structure')
const ms = require('ms')

module.exports = class extends Command {
    constructor (client) {
        super(client, {
            name: 'mute',
            aliases: ['mutar'],
            category: 'Moderation'
        })
    }
   async run ({ channel, guild, mentions, args }) {
    let tomute = mentions.users.first() || guild.members.cache.get(args[0]);
    if(!tomute) return channel.send("Não foi possível encontrar o usuário.");
    if(tomute.permissions.has("ADMINISTRATOR")) return;
    let muterole = guild.roles.cache.find(role => role.name === "Mutado Zoe™");
    
    if(!muterole){
      try{
        muterole = await guild.roles.create({
          data: {
          name: "Mutado Zoe™",
          color: "AQUA",
          permissions:[]
          },
          reason: "Mute role"
        })
        guild.channels.cache.forEach(async (channel, id) => {
          await channel.overwritePermissions(muterole, {
            SEND_MESSAGES: false,
            ADD_REACTIONS: false
          });
        });
      } catch(e) {
        console.log(e.stack);
      }
    }
    
    let mutetime = args[1];
    if(!mutetime) return channel.send("Você não especificou um horário!");
  
    await(tomute.roles.add(muterole.id));
    channel.send(`<@${tomute.id}> foi silenciado por ${ms(ms(mutetime))}`);
  
    setTimeout(function(){
      tomute.roles.remove(muterole.id);
      channel.send(`<@${tomute.id}> foi desmutado!`);
    }, ms(mutetime));
  }
}
