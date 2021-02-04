package net.zoe.corporation;

import javax.security.auth.login.LoginException;

import net.zoe.corporation.structures.utils.Logging;

public class ZoeLauncher {
    public static void main(String[] args) throws LoginException {
        Logging.info("Zoe is starting .......");
       // new Zoe();
        Logging.info("Operation System: " + System.getProperty("os.name"));
        Logging.info("Starting a IP Rotation for " + System.getProperty("os.name"));
    }
}