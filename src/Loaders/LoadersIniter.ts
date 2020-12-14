import ZoeClient from "../Zoe"
import CommandsLoader from "./CommandsLoader"
import EventsLoader from "./EventsLoader"

export default class LoadersIniter {
    public client: ZoeClient;
    constructor(client: ZoeClient) {
        this.client = client;
        new CommandsLoader(this.client)
        
        setTimeout(() => {
            new EventsLoader(this.client)
        }, 1500);
    }
}