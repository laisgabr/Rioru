package net.zoe.corporation.utilities;

import net.zoe.corporation.utilities.database.ZoeGuild;
import net.zoe.corporation.utilities.database.ZoeUser;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;


public class ZoePostgreSQL {
    public ZoeUser user;
    private Connection driver;
    public ZoeGuild guild;
    public ZoePostgreSQL(String host, String user, String password, String port, String databaseName, boolean ssl) {
        String url = "jdbc:postgresql://" + host + ":" + port + "/" + databaseName + "?user=" + user + "&password=" + password + "&ssl="+ ssl;
        try {
            Connection conn = DriverManager.getConnection(url);
            driver = conn;
        } catch(SQLException e) {
            System.out.println(e.getMessage());
        }

        createInstanceAndPassConnection();
    }

    private void createInstanceAndPassConnection() {
        user = new ZoeUser();
        user.init(driver);

        guild = new ZoeGuild();
        guild.init(driver);
    }
}
