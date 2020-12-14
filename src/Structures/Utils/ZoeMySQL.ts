import ZoeClient from "../../Zoe"

export default class MySQLServer {
    constructor(client: ZoeClient) {
        const mysql = require('mysql');
        const connection = mysql.createConnection({
            database: client.settings.database.database,
            host: client.settings.database.host,
            user: client.settings.database.username,
            password: client.settings.database.password,
            port: client.settings.database.port
        });
        
        return { ...this }
    }
}