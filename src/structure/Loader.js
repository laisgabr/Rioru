module.exports = class Loader {
  constructor (client) {
    this.client = client
    this.critical = false
  }

  load () {
    return true
  }

  log (message, tag) {
    return console.log(`${tag ? '[' + tag.toUpperCase() + '] ' : ''}${message}`)
  }

  logError (message, tag) {
    return console.error(`${tag ? '[' + tag.toUpperCase() + '] ' : ''}${message}`)
  }
}
