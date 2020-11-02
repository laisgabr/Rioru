const { Loader } = require('../Util')
const { readdir } = require('fs')

module.exports = class EventsLoader extends Loader {
    load() {
        try {
            this.StartLoadDiscordEvents()
            return true
        } catch (e) {
            console.error(e)
            return false
        }
    }

    StartLoadDiscordEvents() {
        const chalk = require('chalk')
        readdir('./src/Events/Client', (err, f) => {
            if (err) return console.error(chalk.red.bold(' | [ CLIENT EVENTS ]  ' + err))
            f.forEach(events => {
                const Event = require(`../Events/Client/${events}`)
                delete require.cache[require.resolve(`../Events/Client/${events}`)]
                const event = new Event(this)
                this.client.on(events.split(".")[0], (...args) => event.run(...args))
                console.log(' | ' + chalk.rgb(94, 209, 113).bold('[ CLIENT EVENTS ]  ') + events.replace('.js', '') + ' | Discord Event Loaded with Sucess')
            })
        })

        return this
    }
}