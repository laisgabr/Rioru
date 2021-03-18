package com.github.mrdrooxbr.rioru

import com.github.mrdrooxbr.rioru.database.Database
import com.github.mrdrooxbr.rioru.utils.Config
import com.github.mrdrooxbr.rioru.utils.LoggerActivities
import com.github.mrdrooxbr.rioru.website.Application
import com.mongodb.ConnectionString

fun main() {
    val config = Config()
    Application(config.getConfigs())
    RioruClient(config.getConfigs())
}