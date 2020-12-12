import ZoeClient from "../Zoe.ts"

export default class MySQLServer {
    constructor(client: ZoeClient) {
        /*
           Eu sem querer commitei uns dados ai do MySQL server mas relaxa,
           já apaguei o server e as minhas configs estavam erradas :)
        */

        const mysql = require('mysql');
        const connection = mysql.createConnection({
            database: client.settings.database.database,
            host: client.settings.database.host,
            user: client.settings.database.user
            password
            port
        });
    }
}