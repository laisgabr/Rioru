package me.zoe.bot.database;

public class MyZoeSQLConnector {
    MyZoeSQLConnector(String host, String username, String password, Number port) {

    }
    
    public void getUsersTable() {

    }

    public void getGuildTable() {

    }

    public void removeGuild(String GuildID) {

    }

    public void removeKey(String key) {

    }

    public void removeBlacklist(String type, String ID) {
        if(type.toString().toLowerCase() == "guild") {

        } else {

        }
    }

    public void addBlacklist(String type, String ID, String reason, String staff, String Time) {
        
    } 
}
