module.exports = (message) => {
  const content = message.content.toLowerCase() || message.content.toUpperCase()
  return message.client.config.prefixes.find(prefix => content.startsWith(prefix))
}
