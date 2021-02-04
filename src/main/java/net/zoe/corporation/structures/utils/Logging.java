package net.zoe.corporation.structures.utils;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;

public class Logging {
    public static void sucess(String Content) {
        System.out.println(format("\u001B[32m") + Content);
    }
    
    public static void info(String Content) {
        System.out.println(format("\u001B[33m") + Content);
    }
    
    private static String format(String color) {
        String dateFormated = DateTimeFormatter.ofPattern("dd/MM/uuuu").format(LocalDateTime.now());
        String hourFormated = DateTimeFormatter.ofPattern("HH:mm:ss").format(LocalDateTime.now());
        return "| [" + color + dateFormated + " " + hourFormated + "\u001B[0m ]  ";
    }
    
    public static void error(String Content) {
        System.out.println(format("\u001B[31m") + Content);
    }
}
