module.exports.run = async(bot, message, args) => {
    if(command === 'coins') {
        const eco = require('../Commands/Economia/coins')
        delete require.cache[require.resolve(`../Commands/Economia/coins`)];
        return eco.run(bot, message, args)
      }
      if(command === 'daily') {
        const eco1 = require('../Commands/Economia/daily')
        delete require.cache[require.resolve(`../Commands/Economia/daily`)];
        return eco1.run(bot, message, args)
      } 
     if(command === 'pay' || command === 'pagar') {
        const eco2 = require('../Commands/Economia/pay')
        delete require.cache[require.resolve(`../Commands/Economia/pay`)];
        return eco2.run(bot, message, args)
     }
    
}