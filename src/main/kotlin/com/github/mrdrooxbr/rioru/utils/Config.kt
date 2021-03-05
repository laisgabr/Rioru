package com.github.mrdrooxbr.rioru.utils

import ninja.leaping.configurate.commented.CommentedConfigurationNode
import ninja.leaping.configurate.hocon.HoconConfigurationLoader
import java.nio.file.Path

class Config {
    fun get(): CommentedConfigurationNode {
        return HoconConfigurationLoader.builder().setPath(Path.of("bot.conf")).build().load() }
}