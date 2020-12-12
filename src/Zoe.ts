// @ts-ignore
import { Client, Collection } from "eris";
import * as Loaders from "./Loaders";
import MySQLServer from './Database/MySQL.ts'
import config from '../config.ts';
import { ZoeEmojis } from './'

export default class ZoeClient extends Client {
    public commands: Collection<string>;
    public settings: object;
    public database: MySQLServer;
    public aliases: Collection<string>;
    public zoeEmojis: ZoeEmojis;
    public cooldown: Collection<string>;

    constructor(token: string, options = {}, settings = {
        database: config.database.database,
        host: config.database.host,
        username: config.database.username,
        password: config.database.password,
        port: config.database.port
    }) {
        super(token, options)


        this.settings = {
            database: {
                database: settings.database,
                host: settings.host,
                username: settings.username,
                password: settings.password,
                port: settings.port
            },
        }

        this.commands = new Collection()
        this.aliases = new Collection()
        this.cooldown = new Collection()

        this.database = new MySQLServer(this)
        this.zoeEmojis = new ZoeEmojis()
    }

    start() {
        this.initLoaders()

        super.connect().then(() => {})
        return this
    }

    initLoaders() {
        for(const Loader of Object.values(Loaders)) {
            try {
                new Loader(this)
            } catch (e) {
                return console.error(e)
            }
        }
    }
}
