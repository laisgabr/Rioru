module.exports = {
  fetchAllMembers: true,

  token: process.env.TOKEN,
  owners: JSON.parse(process.env.OWNERS),
  nodes: JSON.parse(process.env.LAVALINK_NODES),
  dbConfig: JSON.parse(process.env.FIREBASE_CONFIG)
}
