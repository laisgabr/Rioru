package com.github.mrdrooxbr.rioru.watchdogs

import com.github.mrdrooxbr.rioru.utils.Config
import net.dv8tion.jda.api.JDA
import net.dv8tion.jda.api.JDABuilder

class WatchdogsClient(token: String) {
    init {
        jda = JDABuilder.createDefault(token).build()
    }

    companion object {
        private lateinit var jda: JDA
        fun alert(ShardID: Int, ClusterID: Int?, ClusterName: String?, Reason: String) {
            val config = Config().get().getNode("configs").getNode("watchdogs")
            jda.getGuildById(config.getNode("guild-id").toString())
                ?.getTextChannelById(config.getNode("status-channel-id").toString())
                ?.sendMessage(""" 
                    Shard $ShardID (`${ClusterName}` ${ClusterID}) caiu.
                    Motivo: `${Reason}`
                """.trimIndent())?.queue()
        }
    }
}