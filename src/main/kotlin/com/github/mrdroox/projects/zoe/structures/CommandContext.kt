package com.github.mrdroox.projects.zoe.structures

import com.github.mrdroox.projects.translates.ZoeTranslates
import net.dv8tion.jda.api.sharding.ShardManager
import net.dv8tion.jda.api.JDA
import net.dv8tion.jda.api.entities.*
import net.dv8tion.jda.api.events.message.guild.GuildMessageReceivedEvent

class CommandContext {
    private var event: GuildMessageReceivedEvent? = null
    private var args: List<List<String>?>? = null

    constructor(event: GuildMessageReceivedEvent?, args: List<List<String>>) {
        this.event = event
        this.args = args
    }

    fun getGuild(): Guild {
        return getEvent()!!.guild
    }

    fun getTranslate(): ZoeTranslates {
        return ZoeTranslates()
    }

    fun getEvent(): GuildMessageReceivedEvent? {
        return event
    }

    fun getArgs(): List<List<String>?>? {
        return args
    }

    fun getChannel(): TextChannel? {
        return getEvent()!!.channel
    }

    fun getMessage(): Message? {
        return getEvent()!!.message
    }

    fun getAuthor(): User? {
        return getEvent()!!.author
    }

    fun getMember(): Member? {
        return getEvent()!!.member
    }

    fun getJDA(): JDA {
        return getEvent()!!.jda
    }

    fun getShardManager(): ShardManager? {
        return getJDA().shardManager
    }

    fun getSelfUser(): User? {
        return getJDA().selfUser
    }

    fun getSelfMember(): Member? {
        return getGuild().selfMember
    }
}