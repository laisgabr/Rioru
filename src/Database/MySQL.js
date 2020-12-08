export default class MySQL {
    constructor(client) {
        this.client = client;
        
        import { Database } from 'https://deno.land/x/denodb/mod.ts';
        
        const db = new Database('mysql', {
            database: 'my-database',
            host: 'url-to-db.com',
            username: 'username',
            password: 'password',
            port: 3000,
        });
    }
    
}