module.exports = class ZoeEmbedBuilder {
    constructor(user) {
        if(!user) throw new TypeError('You need pass the user in embed builder')
        this.fields = []
        this.author = null
        this.description = null
        this.color = 0xE82CDF
        
        this.footer = {
            text: user.username,
            icon_url: user.avatarURL
        },

        this.image = null
        this.timestamp = new Date();
        this.title = null
        this.thumbnail = null
        this.url = null
    }
    
    setAuthor(name, icon_url, url) {
        this.author = { name, icon_url, url }
        return this
    }
    
    setTitle(title) {
        this.title = title
        return this
    }
    
    setDescription(description) {
        if(!description) throw new RangeError("You need pass the content")
        if(description.length >= 2048) throw new RangeError("Description length passed 2048")
        
        this.description = description
        return this
    }
    
    addField(name, value, inline = false) {
        if (!name || this.fields.length >= 25) return this
        if (!value) return false
        this.fields.push({ name: name.toString().substring(0, 256), value: value.toString().substring(0, 1024), inline })
        return this
    }
    
    addBlankField(inline = false) {
        this.addField('\u200B', '\u200B', inline)
        return this
    }
    
    setImage(image, height = null, width = null) {
        this.image = {
            url: image
        }
        if (height) this.image.height = height
        if (width) this.image.width = width
        return this
    }
    
    setUrl(url) {
        this.url = url
        return this
    }
    
    setThumb(url) {
        this.thumbnail = { url }
        return this
    }
}