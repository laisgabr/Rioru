const { Loader } = require('../Util')
const { readdir } = require('fs')

module.exports = class LavalinkLoader extends Loader {
    load() {
        try {
            this.startLoadMusicEvents('Events/Lavalink')
            return true
        } catch (e) {
            console.error(e)
            return false
        }
    }

    startLoadMusicEvents(path) {
        const chalk = require('chalk')
        readdir('./src/Events/Lavalink', (err, f) => {
            if (err) return console.error(chalk.red.bold(' | [ LAVALINK EVENTS ]  ' + err))
            f.forEach(events => {
                const Event = require(`../${path}/${events}`)
                delete require.cache[require.resolve(`../${path}/${events}`)]
                const event = new Event(this)
                this.client.music.on(events.split(".")[0], (...args) => event.run(...args))
                console.log(' | ' + chalk.rgb(94, 209, 113).bold('[ LAVALINK EVENTS ]  ') + events.replace('.js', '') + ' | Lavalink Event Loaded with Sucess')
            })
        })

        return this
    }
}