package com.github.shadowb64.rioru

import com.github.shadowb64.rioru.managers.command.CommandManager
import com.github.shadowb64.rioru.utilities.JDAEventsListener
import com.github.shadowb64.rioru.utilities.RioruUtilities
import com.github.shadowb64.rioru.utilities.json
import net.dv8tion.jda.api.requests.GatewayIntent
import net.dv8tion.jda.api.sharding.DefaultShardManagerBuilder
import net.dv8tion.jda.api.sharding.ShardManager
import net.dv8tion.jda.api.utils.ChunkingFilter
import net.dv8tion.jda.api.utils.MemberCachePolicy
import java.io.File
import kotlin.system.exitProcess

object Rioru {
    lateinit var me: ShardManager
    fun createMyInstance(vararg intents: GatewayIntent) {
        checkConfig()
        CommandManager()
        me = DefaultShardManagerBuilder.createDefault(
            getBotConf().getString("token"),
            GatewayIntent.GUILD_MEMBERS,
            *intents
        ).also {
            with(it) {
                addEventListeners(JDAEventsListener())
                setChunkingFilter(ChunkingFilter.ALL)
                setMemberCachePolicy(MemberCachePolicy.ALL)
            }
        }.build()
    }

    private fun checkConfig() {
        val botConfFile = File("./discord.json")
        val servicesConfFile = File("./services.json")
        if (!botConfFile.exists() && !servicesConfFile.exists()) {
            RioruUtilities.createFileAndWrite(
                "./discord.json", """
            {
                "token": "",
                "id": "",
                "developers": [],
                "secret": "",
                "logs": {
                    "guildsID": "",
                    "paymentsID": "",
                    "logsID": "",
                    "commands": ""
                }
            }
            """.trimIndent()
            )
            RioruUtilities.createFileAndWrite(
                "./services.json", """
            {
                "dashboard": {
                    "port": 8080,
                    "apiNodeJS": {
                       "port": 4040,
                       "secret": ""
                    },
                    
                    "apiKotlin": {
                        "port": 2333,
                        "secret": ""
                    }
                }
            }
            """.trimIndent()
            )
            println("Hi, My name is Rioru c:")
            println("I want make the Discord a better place and the world too")
            println("But first, I need you to open the files(\"services.json\", \"discord.json\") I created for you and configure me")
            println("And rerun me\nSee you later :)")
            exitProcess(1)
        }
    }

    fun getServicesConf() = RioruUtilities.readFile("./services.json").json()
    fun getBotConf() = RioruUtilities.readFile("./discord.json").json()
}