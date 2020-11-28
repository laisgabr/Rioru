module.exports = class ZoeUtils {
    constructor(client, msg) {
        this.client = client;
        this.msg = msg;
    }

    replyMessage(content, emoji) {
        if(!content) throw new RangeError("ZoeUtils#zoeReply need content to send message")
        if(!emoji) emoji = ''
        if(!content && emoji === '') return this.msg.channel.createMessage(`${this.msg.author.mention}`)
        if(!emoji === '') return this.msg.channel.createMessage(`${this.client.clientEmojis.getEmoji(emoji)} | ${this.msg.author.mention}, ${content}`)

       if(content && emoji === '') return this.msg.channel.createMessage(`${this.msg.author.mention}, ${content}`)
    }

    SendMessage(id, content) {
       if(!id) id = this.msg.channel.id
        if(!content) throw new RangeError("ZoeUtils#zoeSendMessage need content to send message")
        
        this.client.createMessage(id, content)
    }
}