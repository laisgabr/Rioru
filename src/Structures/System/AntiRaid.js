module.exports = class AntiRaid {
    constructor(client, msg, bool) {
        this.client = client;
        this.msg = msg;
        this.bool = bool;
        if(typeof this.bool !== "boolean") throw new RangeError("You need pass the boolean value.")
        
        try {
            if(bool === true) {
                msg.channel.guild.roles.get(msg.channel.guild.id).edit({ })   
            } else if(bool === false) {
                
            }
        } catch (e) {
            
        }
    }
    
    
}