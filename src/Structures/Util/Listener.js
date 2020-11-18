module.exports = class Listener {
    constructor (client, options) {
      this.name = options.name
      this.once = options.once || false
      this.client = client
    }
  
    run () {}
}