module.exports.run = async(bot, message, args) => {
    if (command === 'lock' || command === 'bloqueiar' || command === 'travar') {
        const uk = require('../Commands/Admin/lock')
        delete require.cache[require.resolve(`../Commands/Admin/lock`)];
        return uk.run(bot, message, args)
      }
      if (command === 'unlock' || command === 'desbloqueiar' || command === 'destravar') {
        const uk1 = require('../Commands/Admin/unlock')
        delete require.cache[require.resolve(`../Commands/Admin/unlock`)];
        return uk1.run(bot, message, args)
      }
      if (command === 'clear' || command === 'limpar') {
        const uk2 = require('../Commands/Admin/clear')
        delete require.cache[require.resolve(`../Commands/Admin/clear`)];
        return uk2.run(bot, message, args)
      }
}