module.exports.run = async(bot, message, args, command, queue) => {
if (command === 'hug' || command === 'abraçar') {
    const div = require('../Commands/Fun/hug')
    delete require.cache[require.resolve(`../Commands/Fun/hug`)];
    return div.run(bot, message, args)
  }
  if (command === 'kiss' || command === 'beijar') {
      const div1 = require('../Commands/Fun/kiss')
      delete require.cache[require.resolve(`../Commands/Fun/kiss`)];
      return div1.run(bot, message, args)
  }
  if(command === 'slap' || command === 'tapa') {
    const div2 = require('../Commands/Fun/slap')
    delete require.cache[require.resolve(`../Commands/Fun/slap`)];
    return div2.run(bot, message, args)
  }
if(command === 'meow' || command === 'gato') {
    const div3 = require('../Commands/Fun/meow')
    delete require.cache[require.resolve(`../Commands/Fun/meow`)];
    return div3.run(bot, message, args)
  }
if(command === 'pat' || command === 'cafune' || command === 'cafuné') {
  const div4 = require('../Commands/Fun/pat')
  delete require.cache[require.resolve(`../Commands/Fun/pat`)];
  return div4.run(bot, message, args)
  }
};
