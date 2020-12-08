import { Client } from "https://raw.githubusercontent.com/ayntee/dencord/main/mod.ts"

class ZoeClient extends Client {
    constructor(token, options = {}, settings = {}) {
        super(token, options)
        this.token = token;
        
        this.settings = {
            
        }
    }

    start() {
        super.start()
        return this
    }
}
export default ZoeClient;