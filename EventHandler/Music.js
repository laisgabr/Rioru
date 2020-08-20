module.exports.run = async(bot, message, args) => {
    if (command === 'lyrics' || command === 'letras') {
        const music = require('../Commands/Music/lyrics')
        delete require.cache[require.resolve(`../Commands/Music/lyrics`)];
        return music.run(bot, message, args, queue)
      }
     
      if(command === 'play' || command === 'p') {
        const music1 = require('../Commands/Music/play')
        delete require.cache[require.resolve(`../Commands/Music/play`)];
        return music1.run(bot, message, args, queue)
      }
      if(command === 'queue' || command === 'q') {
        const music2 = require('../Commands/Music/queue')
        delete require.cache[require.resolve(`../Commands/Music/queue`)];
        return music2.run(bot, message, args, queue)
      }
      if(command === 'skip' || command === 'pular') {
        const music3 = require('../audio/sistema')
        delete require.cache[require.resolve(`../audio/sistema`)];
        return music3.run(bot, message, args, queue)
      }
      if(command === 'stop' || command === 'parar') {
        const music4 = require('../audio/sistema')
        delete require.cache[require.resolve('../audio/sistema')];
        return music4.run(bot, message, args, queue)
      }
}

