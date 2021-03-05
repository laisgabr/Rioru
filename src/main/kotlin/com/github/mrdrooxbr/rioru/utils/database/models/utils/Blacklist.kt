package com.github.mrdrooxbr.rioru.utils.database.models.utils

data class Blacklist(
    var isBlacklisted: Boolean,
    var blacklistReason: String?,
    var blacklistTime: String?,
    var staff: String?
)