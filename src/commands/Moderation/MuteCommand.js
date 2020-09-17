/* eslint-disable space-before-blocks */
/* eslint-disable space-before-function-paren */
/* eslint-disable comma-dangle */
/* eslint-disable keyword-spacing */
/* eslint-disable quotes */
/* eslint-disable lines-between-class-members */
/* eslint-disable no-trailing-spaces */
/* eslint-disable indent */
const { Command } = require('../../structure')

module.exports = class extends Command {
    constructor (client) {
        super(client, {
            name: 'mute',
            aliases: ['mutar'],
            usage: '',
            description: '',
            category: 'Moderation'
        })
    }
   async run ({ channel, guild, mentions, args, author, msg, member }) {
        const ms = require("ms")

  var mutado = mentions.members.first() || guild.members.cache.get(args[0])
  if(!mutado) return channel.send("Por favor diga quem você quer mutar!")
  if(!member.hasPermission("MANAGE_MESSAGES", "ADMINISTRATOR")) return channel.send("Você não tem permissão para mutar as pessoas!")
  if (mutado.id === author.id) return channel.send("Você não pode se mutar :v")
  var cargomute = guild.roles.cache.find(cargo => cargo.name === "Mutado")
  
  if(!cargomute){
    try{
      guild.roles.create({
    data: {
    name: "Mutado",
    color: 'RED',
    permissions: []
    },
  reason: 'Mute Role',
  }) 
   }catch(e){
      console.log(e.stack)
    }
  }
 
  var mutetime = args[1]
  if(!mutetime) return channel.send("Diga um tempo por favor")
  
  await (mutado.roles.add(cargomute.id))
   
  msg.reply(`<@${mutado.user.id}> foi mutado por ${ms(ms(mutetime))}`)
  setTimeout(function(){
    mutado.roles.remove(cargomute.id)
    channel.send(`<@${mutado.id}> foi desmutado!`)
  }, ms(mutetime))
    }
}
