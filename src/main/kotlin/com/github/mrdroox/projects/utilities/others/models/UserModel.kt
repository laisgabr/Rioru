package com.github.mrdroox.projects.utilities.others.models

data class UserModel(
    val id: String,
    var blacklisted: Boolean = false,
    var blacklistReason: String? = null,
    var blacklistAuthor: String? = null,
    var blacklistTimestamp: String = "0",
    var temporary: Boolean = false,
    var fragments: String = "0",
    var lastDailyTimestamp: String = "0"
    )