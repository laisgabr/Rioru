import ZoeClient from "../Zoe.js"
import { Client } from "https://deno.land/x/mysql/mod.ts";

export default class MySQLServer {
    constructor(client: ZoeClient) {
        
        /*
        Eu sem querer commitei uns dados ai do MySQL server mas relaxa,
        já apaguei o server e as minhas configs estavam erradas :)
        */
        
        (async function() {   
            const database = await new Client().connect({
                hostname: client.settings.database.host,
                username: client.settings.database.username,
                db: client.settings.database.database,
                password: client.settings.database.password
            });
            
            
            return {
                ...this
            }
        })()
    }
}