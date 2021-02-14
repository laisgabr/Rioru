package com.github.mrdroox.projects.database

import java.sql.SQLException
import java.sql.DriverManager
import java.sql.Connection

class PostgreSQLConnection(
    host: String,
    port: String,
    databaseName: String,
    user: String,
    password: String,
    ssl: Boolean
) {
    init {
        createConnection(host, port, databaseName, user, password, ssl)
    }

    companion object {
        private lateinit var connection: Connection
        fun createConnection(host: String, port: String, databaseName: String, user: String, password: String, ssl: Boolean) {
            val url = "jdbc:postgresql://$host:$port/$databaseName?user=$user&password=$password&ssl=$ssl"
            try {
                connection = DriverManager.getConnection(url)
            } catch(e: SQLException) {
                println(e.message)
            }
        }
    }
}