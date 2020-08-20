module.exports.run = async(bot, message, args) => {
    
if(command === 'start') {
    const giveaway = require('../Commands/Sorteio/startGiveaway')
    delete require.cache[require.resolve(`../Commands/Sorteio/startGiveaway`)];
    return giveaway.run(bot, message, args)
  }
}