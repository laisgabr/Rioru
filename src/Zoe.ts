import { Client } from 'eris'
import config from "../config"
import MySQLServer from './Structures/Utils/ZoeMySQL';
import LoadersIniter from './Loaders/LoadersIniter';
import ZoeEmojis from './Structures/Utils/ZoeEmojis';

export default class ZoeClient extends Client {
    public token: string;
    public settings: any;
    public commands: any;
    public aliases: any;
    public cooldown: any;
    public database: MySQLServer;
    public zoeEmojis: ZoeEmojis;
    constructor(token: string, options = {}) {
        super(token, options)
        this.token = token;    
        
        this.settings = {
            database: config.database.database,
            host: config.database.host,
            username: config.database.username,
            password: config.database.password,
            port: config.database.port
        }
        
        this.commands = new Map()
        this.aliases = new Map()
        this.cooldown = new Map()
        
        this.database = new MySQLServer(this)
        this.zoeEmojis = new ZoeEmojis()
    }
    
    public start() {
        new LoadersIniter(this)
        
        super.connect().then(() => {})
        return this
    }
}
