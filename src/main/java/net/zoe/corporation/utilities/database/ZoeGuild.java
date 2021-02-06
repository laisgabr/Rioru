package net.zoe.corporation.utilities.database;

import java.sql.Connection;

public class ZoeGuild {
    public Connection ZoeConnection;

    public void init(Connection driver) {
        ZoeConnection = driver;
    }
}
