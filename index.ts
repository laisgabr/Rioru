import ZoeClient from "./src/Zoe.ts";
import config from "./config.ts";

const Zoe = new ZoeClient(config.token, { });

Zoe.start();