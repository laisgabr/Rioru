import { Database } from 'https://deno.land/x/denodb/mod.ts';

const db = new Database('mysql', {
    database: '',
    host: '52.156.106.91',
    username: 'root',
    password: 'zoedatabase277353',
    port: 3000
})

db.query("SELECT * FROM USERS")

/*export default class MySQL {
    constructor(client) {
        this.client = client;
        

    }
    
}
 */