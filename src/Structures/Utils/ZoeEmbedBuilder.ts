import { EmbedFooter, EmbedAuthor, EmbedField, EmbedImage } from 'eris'

export default class ZoeEmbedBuilder {
    public fields: EmbedField[];
    public author: EmbedAuthor;
    public description: string;
    public color: number;
    public footer: EmbedFooter;
    public image: any;
    public timestamp: Date;
    public title: string;
    public thumbnail: EmbedImage;
    public url: string;
    constructor(user: any) {
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

    setAuthor(name: string, icon_url: string, url: string) {
        this.author = { name, icon_url, url }
        return this
    }
    
    setTitle(title: string) {
        this.title = title
        return this
    }
    
    setDescription(description: string) {
        if(!description) throw new RangeError("You need pass the content")
        if(description.length >= 2048) throw new RangeError("Description length passed 2048")
        
        this.description = description
        return this
    }
    
    addField(name: string, value: string, inline = false) {
        if (!name || this.fields.length >= 25) return this
        if (!value) return false
        this.fields.push({ name: name.toString().substring(0, 256), value: value.toString().substring(0, 1024), inline })
        return this
    }
    
    addBlankField(inline = false) {
        this.addField('\u200B', '\u200B', inline)
        return this
    }
    
    setImage(image: string, height: null, width: null) {
        this.image = {
            url: image
        }
        if (height) this.image.height = height
        if (width) this.image.width = width
        return this
    }
    
    setUrl(url: string) {
        this.url = url
        return this
    }
    
    setThumb(url: string) {
        this.thumbnail = { url }
        return this
    }
}