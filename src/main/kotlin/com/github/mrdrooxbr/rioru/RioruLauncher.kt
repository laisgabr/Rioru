package com.github.mrdrooxbr.rioru

import com.github.mrdrooxbr.rioru.utils.Config
import com.github.mrdrooxbr.rioru.utils.LoggerActivities
import com.github.mrdrooxbr.rioru.utils.database.Database
import com.github.mrdrooxbr.rioru.watchdogs.WatchdogsClient
import com.mongodb.ConnectionString
import org.springframework.boot.runApplication
import org.springframework.boot.autoconfigure.SpringBootApplication
import java.io.File
import kotlin.system.exitProcess

@SpringBootApplication
open class RioruBotApplication

fun main(args: Array<String>) {
   // if(!File("./bot.conf").exists()) { LoggerActivities.error("You need create a bot.conf file :c"); exitProcess(1) }

   // val config = Config().get()
   // Database(ConnectionString(config.getNode("configs").getNode("services").getNode("RioruDB").getString("uri")))
    runApplication<RioruBotApplication>(*args)

   // WatchdogsClient(config.getNode("configs").getNode("watchdogs").getString("token"))
   // RioruClient(config)
}