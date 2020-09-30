const { Command } = require('../../structure')

module.exports = class extends Command {
    constructor (client) {
        super(client, {
            name: 'mute',
            aliases: ['mutar'],
            category: 'Moderation'
        })
    }
   async run ({ channel, guild, mentions, args, author, member }) {
    const ms = require("ms")

  var mutado = mentions.members.first() || guild.members.cache.get(args[0])
  if(!mutado) return channel.send("<:xSweet:756989900661850182> | Por favor diga quem você quer mutar!")
  if(!member.hasPermission("MANAGE_MESSAGES", "ADMINISTRATOR")) return channel.send("<:xSweet:756989900661850182> | Você não tem permissão para mutar as pessoas!")
  if (mutado.id === author.id) return channel.send("<:xSweet:756989900661850182> | Você não pode se mutar :v")
  var cargomute = guild.roles.cache.find(cargo => cargo.name === "Mutado")

  if (!cargomute) {
  try{
    guild.roles.create({
  data: {
    name: "Mutado",
    color: 'RED',
    permissions: []
  },
   reason: 'Mute Role',
})
   } catch (e) {
    console.log(e.stack)
   }
}

  let time = args.slice(1).join(' ')
  if(!time) return channel.send("<:xSweet:756989900661850182> | Diga um tempo por favor")

  time = await time.toString()

        if (time.indexOf('s') !== -1) {
            var tempoS = await time.replace(/s.*/, '')
            var tempo = await tempoS * 1000
        } else if (time.indexOf('m') !== 1) {
            var tempoM = await time.replace(/m.*/, '')
            tempo = await tempoM * 60 * 1000
        } else if (time.indexOf('h') !== -1) {
            var tempoH = await time.replace(/h.*/, '')
            tempo = await tempoH * 1000
        } else if (time.indexOf('d') !== 1) {
            var tempoD = await time.replace(/d.*/, '')
            tempo = await tempoD * 60 * 1000
        }

  await (mutado.roles.add(cargomute.id))

  channel.send(`<@${mutado.user.id}> foi mutado por ${time}`)
  setTimeout(function(){
    mutado.roles.remove(cargomute.id)
    channel.send(`<@${mutado.id}> foi desmutado!`)
  }, ms(tempo))
    }
}
