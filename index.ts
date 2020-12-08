import ZoeClient from "./src/Zoe.js";
import settings from "./config.js";

const Zoe = new ZoeClient(settings.token);

Zoe.start();