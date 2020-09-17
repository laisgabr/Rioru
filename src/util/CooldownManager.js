/* eslint-disable no-trailing-spaces */
/* eslint-disable indent */
const cooldownTypes = {
    get set () {
      return new Set()
    },
    get map () {
      return new Map()
    }
  }
  
  const CooldownManager = (time, type = 'set') => {
    const cooldown = cooldownTypes[type] || new Set()
  
    return {
      has (key) {
        return cooldown.has(key)
      },
      get (key) {
        if (!(cooldown instanceof Map)) return 0
        return cooldown.get(key)
      },
      add (key, value) {
        setTimeout(() => this.delete(key), time)
  
        if (cooldown instanceof Map) return cooldown.set(key, value)
  
        return cooldown.add(key)
      },
      delete (key) {
        return cooldown.delete(key)
      }
    }
  }
  
  module.exports = CooldownManager
