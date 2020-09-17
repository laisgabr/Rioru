const { readdirSync, statSync } = require('fs')
const { resolve } = require('path')

module.exports = function requireDirectory ({ dir, filesOnly = ['js', 'json'], recursive = true }, callback) {
  const files = readdirSync(dir)

  for (const file of files) {
    const fullPath = resolve(dir, file)

    if (recursive && statSync(dir + '/' + file).isDirectory()) {
      requireDirectory({ dir: dir + '/' + file, filesOnly, recursive }, callback)
    }

    if (filesOnly.some(ext => new RegExp(`.${ext}$`).test(file))) {
      try {
        const required = require(fullPath)

        callback(null, required)
      } catch (err) {
        callback(err, file)
      }
    }
  }
}
