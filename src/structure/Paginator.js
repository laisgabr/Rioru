/* eslint-disable no-trailing-spaces */
/* eslint-disable indent */
class Paginator {
    constructor ({ elements, size }) {
      this.elements = elements
      this.pages = {
        actual: 1,
        total: Math.ceil(elements.length / size),
        size
      }
    }
  
    nextPage () {
      const { actual, total } = this.pages
      if (actual < total) this.pages.actual++
  
      return this
    }
  
    prevPage () {
      const { actual } = this.pages
      if (actual > 1) this.pages.actual--
  
      return this
    }
  
    get (removeFirst = false) {
      if (typeof removeFirst !== 'boolean') { throw new TypeError('Expected boolean but received ' + typeof removeFirst) }
      const { actual, size } = this.pages
  
      const first = (actual - 1) * size
      const second = actual * size
  
      const result = this.elements.slice(first + removeFirst, second)
  
      return result
    }
  }
  
  module.exports = Paginator
