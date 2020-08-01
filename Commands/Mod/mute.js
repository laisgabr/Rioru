const Discord = require("discord.js");
const ms = require("ms");

module.exports.run = async (bot, message, args) => {
  
  

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
  reason: 'Para Pessoas Deselegantes',
}) 
      


    }catch(e){
      console.log(e.stack);
    }
  }
 
  let mutetime = args[1];
  if(!mutetime) return message.channel.send("Diga um tempo por favor");
  
  me
  await(mutado.roles.add(cargomute.id));  
   
  let totalSeconds = mutetime / 1000;
  let dias = Math.floor(mutetime / 86400);
  let horas = Math.floor(mutetimee / 3600);
  mutetime %= 3600;
  let minuto = Math.floor(mutetime / 60);
  let segundo = mutetime % 60;
  message.reply(`<@${mutado.user.id}> foi mutado por ${ms(ms(mutetime))}`);
  setTimeout(function(){
    mutado.roles.remove(cargomute.id);
    message.channel.send(`<@${mutado.id}> foi desmutado!`);
  }, ms(mutetime));

  message.delete();
}
