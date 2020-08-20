module.exports.run = async(bot, message, args) => {
    if (command === 'ban' || command === 'banir') {
        const fr = require('../Commands/Mod/ban')
        delete require.cache[require.resolve(`../Commands/Mod/ban`)];
        return fr.run(bot, message, args)
      }
      if (command === 'kick' || command === 'kickar' || command === 'expulsar') {
        const fr1 = require('../Commands/Mod/kick')
        delete require.cache[require.resolve(`../Commands/Mod/kick`)]
        return fr1.run(bot, message, args)
      }
      if (command === 'mute' || command === 'mutar' || command === 'silenciar') {
        const fr2 = require('../Commands/Mod/mute')
        delete require.cache[require.resolve(`../Commands/Mod/mute`)];
        return fr2.run(bot, message, args)
      }
     if (command === 'unban' || command === 'desbanir') {
       const fr4 = require('../Commands/Mod/unban')
       delete require.cache[require.resolve(`../Commands/Mod/unban`)];
       return fr4.run(bot, message, args)
     }
     if (command === 'unmute' || command === 'desmutar' || command === 'desmute' || command === 'dessilenciar') {
       const fr5 = require('../Commands/Mod/unmute')
       delete require.cache[require.resolve(`../Commands/Mod/unmute`)];
       return fr5.run(bot, message, args)
     }
}