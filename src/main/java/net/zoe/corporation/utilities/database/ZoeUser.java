package net.zoe.corporation.utilities.database;

import java.sql.Connection;
import java.sql.SQLException;
import java.sql.Statement;

public class ZoeUser {
    public Connection ZoeConnection;

    public void init(Connection driver) {
        ZoeConnection = driver;
    }

    public void createUser() {
        try {
            Statement sqlQuery = ZoeConnection.createStatement();
            sqlQuery.executeQuery("  ");
        } catch(SQLException e) {
            return;
        }
    }
}
