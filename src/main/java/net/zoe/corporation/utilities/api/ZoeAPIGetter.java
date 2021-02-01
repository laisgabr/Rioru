package net.zoe.corporation.utilities.api;

import net.zoe.corporation.utilities.RequestSender;

public class ZoeAPIGetter {
    public static Object getAPI(String APIName, String Method) {
        if(!Method.toLowerCase().equals("post") && !Method.toLowerCase().equals("get")) 
            throw new RuntimeError("ZoeAPIGetter#getAPI() you need pass method POST or GET");
    }
}
