module.exports = class ZoeEmojis {
    constructor(client) {
        this.client = client;
    }
    
    getEmoji(name) {
        if(typeof name !== 'string') throw new RangeError('Emojis#getEmoji() accept only String')
        
        const emojis = {
            sucess: '<:checkSweet:757016162633646211>',
            error: '<:xSweet:756989900661850182>',
            think: '<:ZoeThink:777701935351332926>',
            disc: 'null'
        }
        
        const emoji = emojis[name]
        if(emoji === 'null') throw new Error('This emoji is Null')
        if(!emoji) throw new RangeError('Not exists any emoji with name: ' + name)
        
        return emoji
    }
}