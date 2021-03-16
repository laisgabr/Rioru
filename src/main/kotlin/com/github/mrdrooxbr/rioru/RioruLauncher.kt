package com.github.mrdrooxbr.rioru

import com.github.mrdrooxbr.rioru.bot.managers.CommandManager
import com.github.mrdrooxbr.rioru.database.Database
import com.github.mrdrooxbr.rioru.utils.Config
import com.github.mrdrooxbr.rioru.utils.KtorRequisition
import com.github.mrdrooxbr.rioru.utils.LoggerActivities
import com.github.mrdrooxbr.rioru.watchdogs.WatchdogsClient
import com.mongodb.ConnectionString
import java.io.File
import kotlin.system.exitProcess

suspend fun main() {

    println(KtorRequisition.get("https://github.com"))
    if(!File("./bot.conf").exists()) { LoggerActivities.error("You need create a bot.conf file :c"); exitProcess(1) }
    //val config = Config().get()
    //Database(ConnectionString(config.getNode("configs").getNode("services").getNode("RioruDB").getString("uri")))

    //WatchdogsClient(config.getNode("configs").getNode("watchdogs").getString("token"))
    //RioruClient(config)
}