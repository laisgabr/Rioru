module.exports = class CommandContext {
  constructor (context, args, cmd, prefix, database) {
    this.context = context
    this.args = args
    this.cmd = cmd
    this.prefix = prefix
    this.firebase = database

    this.database = context.database
    this.message = context.message
    this.msg = context.msg
    this.content = context.content
    this.guild = context.guild
    this.member = context.member
    this.author = context.author
    this.channel = context.channel
    this.mentions = context.mentions
    this.client = context.client
    this.lavalink = context.client.lavalink
    this.config = context.client.config
  }
}
