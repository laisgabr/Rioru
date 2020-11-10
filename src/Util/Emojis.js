module.exports = class Emojis {
    getEmoji(name) {
        if(typeof name !== 'string') throw new RangeError('Emojis#getEmoji() accept only String')

        const emojis = {
            sucess: '<:checkSweet:757016162633646211>',
            error: '<:xSweet:756989900661850182>',
            disc: 'null',
            tuts: 'null',
            playing: 'null'
        }

        const emoji = emojis[name]
        if(!emoji) throw new RangeError('Not exists any emoji with name: ' + name)

        return emoji
    }
}