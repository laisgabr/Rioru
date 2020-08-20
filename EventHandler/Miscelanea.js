module.exports.run = async(bot, message, args, command, queue) => {
if (command === 'ajuda' || command === 'help') {
        const Ajuda = require('../Commands/Miscelanea/ajuda')
        delete require.cache[require.resolve(`../Commands/Miscelanea/ajuda`)];
        return Ajuda.run(bot, message, args)
      }
      
      if (command === 'avatar' || command === 'av') {
        const Av = require('../Commands/Miscelanea/avatar')
        delete require.cache[require.resolve(`../Commands/Miscelanea/avatar`)];
        return Av.run(bot, message, args)
      }
       
       if (command === 'botinfo' || command === 'bi') {
       const us = require('../Commands/Miscelanea/botinfo')
       delete require.cache[require.resolve(`../Commands/Miscelanea/botinfo`)];
       return us.run(bot, message, args, prefix)
    }
      
      if(command === 'djs' || command === 'discord.js' || command === 'discordjs' || command === 'docs') {
      const us9 = require('../Commands/Miscelanea/djs')
      delete require.cache[require.resolve(`../Commands/Miscelanea/djs`)];
      return us9.run(bot, message, args)
    }

    if (command === 'donate' || command === 'doar') {
      const us1 = require('../Commands/Miscelanea/donate')
      delete require.cache[require.resolve(`../Commands/Miscelanea/donate`)];
      return us1.run(bot, message, args)
    }
    if (command === 'invite' || command === 'convite') {
      const us2 = require('../Commands/Miscelanea/invite')
      delete require.cache[require.resolve(`../Commands/Miscelanea/invite`)];
      return us2.run(bot, message, args)
    }
    
    if (command === 'ping' || command === 'latency' || command === 'latencia') {
      const us3 = require('../Commands/Miscelanea/ping')
      delete require.cache[require.resolve(`../Commands/Miscelanea/ping`)];
      return us3.run(bot, message, args)
    }
   
    if (command === 'say' || command === 'falar') {
      const us4 = require('../Commands/Miscelanea/say')
      delete require.cache[require.resolve(`../Commands/Miscelanea/say`)];
      return us4.run(bot, message, args)
    }
    
    if (command === 'serverinfo' || command === 'si') {
      const us5 = require('../Commands/Miscelanea/serverinfo')
      delete require.cache[require.resolve(`../Commands/Miscelanea/serverinfo`)];
      return us5.run(bot, message, args)
    }
    
    if(command === 'setAFK' || command === 'setarAFK') {
      const u9 = require('../Commands/Miscelanea/setAfk')
      delete require.cache[require.resolve(`../Commands/Miscelanea/setAfk`)];
      return u9.run(bot, message, args)
    }
    
    if (command === 'setNick' || command === 'setNickname' || command === 'setarNick' || command === 'setarNickname') {
      const us6 = require('../Commands/Miscelanea/setNick')
      delete require.cache[require.resolve(`../Commands/Miscelanea/setNick`)];
      return us6.run(bot, message, args)
    }
   
    if (command === 'uptime' || command === 'TimeOn') {
      const us7 = require('../Commands/Miscelanea/uptime')
      delete require.cache[require.resolve(`../Commands/Miscelanea/uptime`)];
      return us7.run(bot, message, args)
    }  

    if (command === 'userinfo' || command === 'ui') {
      const us8 = require('../Commands/Miscelanea/userinfo')
      delete require.cache[require.resolve(`../Commands/Miscelanea/userinfo`)];
      return us8.run(bot, message, args)
    }

}
