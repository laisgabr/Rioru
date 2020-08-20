module.exports.run = async(bot, message, args) => {
    if (command === 'BlackListAdd' || command === 'asunaban') {
        const dev = require('../Commands/Developer/blacklistAdd')
        delete require.cache[require.resolve(`../Commands/Developer/blacklistAdd`)];
        return dev.run(bot, message, args)
      }
      if (command === 'blacklistRemove' || command === 'asunaunban') {
        const dev1 = require('../Commands/Developer/blacklistRemove')
        delete require.cache[require.resolve(`../Commands/Developer/blacklistRemove`)];
        return dev1.run(bot, message, args)
      }
      if (command === 'eval' || command === 'ev') {
        const dev2 = require('../Commands/Developer/eval')
        delete require.cache[require.resolve(`../Commands/Developer/eval`)];
        return dev2.run(bot, message, args)
     }
     if (command === 'passarComando' || command === 'useCommand') {
       const dev3 = require('../Commands/Developer/passarComando')
       delete require.cache[require.resolve(`../Commands/Developer/passarComando`)];
       return dev3.run(bot, message, args)
     }
     if (command === 'terminal' || command === 'cmd' || command === 'logs') {
       const dev4 = require('../Commands/Developer/terminal')
       delete require.cache[require.resolve(`../Commands/Developer/terminal`)];
       return dev4.run(bot, message, args)
     }
     if(command === 'desligar' || command === 'stop') {
       const dev5 = require('../Commands/Developer/desligar')
       delete require.cache[require.resolve('../Commands/Developer/desligar')];
       return dev5.run(bot, message, args)
     }
}