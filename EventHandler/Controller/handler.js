module.exports.run = async(bot, message, args, queue, command, prefix) => {
 try {
  // Infos via JavaScriptObjectNative(JSON)
  const configF = require('../Info/FunDB.json')
  const configM = require('../Info/MiscelaneaDB.json')
  const configMod = require('../Info/ModDB.json')
  
  const ac = command
  
  // Fun 
   if(ac === configF.a || ac === configF.aa || ac === configF.b || ac === configF.bb || ac === configF.c || ac === configF.cc || ac === configF.d || ac === configF.dd || ac === configF.e || ac === configF.ee || ac === configF.eee) {
     const Fun = require('../Fun')
     delete require.cache[require.resolve(`../Fun`)];
     return Fun.run(bot, message, args, command, queue)
  }
  // Miscelanea
  if(ac === configM.a || ac === configM.aa || ac === configM.b || ac === configM.bb || ac === configM.c || ac === configM.cc || ac === configM.d || ac === configM.dd || ac === configM.ddd || ac === configM.dddd || ac === configM.e || ac === configM.ee || ac === configM.f || ac === configM.ff || ac === configM.g || ac === configM.gg || ac === configM.ggg || ac === configM.h || ac === configM.hh || ac === configM.i || ac === configM.ii || ac === configM.k || ac === configM.kk || ac === configM.kkk || ac === configM.kkkk || ac === configM.l || ac === configM.ll || ac === configM.m || ac === configM.mm) {
    const Misc = require('../Miscelanea')
    delete require.cache[require.resolve(`../Miscelanea`)];
    return Misc.run(bot, message, args, command, queue)
  }
  if(command) {

  }
} catch (err) {
  console.error("Erro:  " + err)
  const logs = require('./Logs')
  const dc = require('discord.js')
  return logs.run(bot, message, args, dc, err)
  }


}
