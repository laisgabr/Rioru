module.exports = {
	config: {
		name: 'mute',
		aliases: ['mutar'], 
        description: "",
		category: "Mod"
	},
    run: async (client, message, args) => { 
  const ms = require("ms");

  let mutado = message.mentions.members.first() || message.guild.members.cache.get(args[1]);
  if(!mutado) return message.channel.send("Por favor diga quem você quer mutar!");
  if(!message.member.hasPermission("MANAGE_MESSAGES", "ADMINISTRATOR")) return message.channel.send("Você não tem permissão para mutar as pessoas!");
  if (mutado.id === message.author.id) return message.channel.send("Você não pode se mutar :v");
  let cargomute = message.guild.roles.cache.find(cargo => cargo.name === "Mutado");
  
  if(!cargomute){
    try{
      message.guild.roles.create({
    data: {
    name: "Mutado",
    color: 'RED',
    permissions: []
    },
  reason: 'Mute Role',
  }) 
   }catch(e){
      console.log(e.stack);
    }
  }
 
  let mutetime = args[1];
  if(!mutetime) return message.channel.send("Diga um tempo por favor");
  
  await(mutado.roles.add(cargomute.id));  
   
  message.reply(`<@${mutado.user.id}> foi mutado por ${ms(ms(mutetime))}`);
  setTimeout(function(){
    mutado.roles.remove(cargomute.id);
    message.channel.send(`<@${mutado.id}> foi desmutado!`);
  }, ms(mutetime));

  message.delete();

    }
}