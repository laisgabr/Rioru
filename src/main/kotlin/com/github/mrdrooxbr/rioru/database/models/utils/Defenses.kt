package com.github.mrdrooxbr.rioru.database.models.utils

data class Defenses(
    var antiAltAccountsEnabled: Boolean,
    var antiBotsEnabled: Boolean,
    var antiCapsLockExcessiveEnabled: Boolean,
    var antiCapsLockExcessiveIgnoredChannels: Array<String>?,
    var antiFloodEnabled: Boolean,
    var antiFloodIgnoredChannels: Array<String>?,
    var antiInvitesEnabled: Boolean,
    var antiInvitesIgnoredChannels: Array<String>?,
    var antiLinksEnabled: Boolean,
    var antiLinksIgnoredChannels: Array<String>?,
    var antiSpamEnabled: Boolean,
    var antiSpamIgnoredChannels: Array<String>?
) {
    override fun equals(other: Any?): Boolean {
        if (this === other) return true
        if (javaClass != other?.javaClass) return false

        other as Defenses

        if (antiAltAccountsEnabled != other.antiAltAccountsEnabled) return false
        if (antiBotsEnabled != other.antiBotsEnabled) return false
        if (antiCapsLockExcessiveEnabled != other.antiCapsLockExcessiveEnabled) return false
        if (antiFloodEnabled != other.antiFloodEnabled) return false
        if (antiFloodIgnoredChannels != null) {
            if (other.antiFloodIgnoredChannels == null) return false
            if (!antiFloodIgnoredChannels.contentEquals(other.antiFloodIgnoredChannels)) return false
        } else if (other.antiFloodIgnoredChannels != null) return false
        if (antiCapsLockExcessiveIgnoredChannels != null) {
            if (other.antiCapsLockExcessiveIgnoredChannels == null) return false
            if (!antiCapsLockExcessiveIgnoredChannels.contentEquals(other.antiCapsLockExcessiveIgnoredChannels)) return false
        } else if (other.antiCapsLockExcessiveIgnoredChannels != null) return false
        if (antiInvitesEnabled != other.antiInvitesEnabled) return false
        if (antiLinksEnabled != other.antiLinksEnabled) return false
        if (antiSpamEnabled != other.antiSpamEnabled) return false

        return true
    }

    override fun hashCode(): Int {
        var result = antiAltAccountsEnabled.hashCode()
        result = 31 * result + antiBotsEnabled.hashCode()
        result = 31 * result + antiCapsLockExcessiveEnabled.hashCode()
        result = 31 * result + antiFloodEnabled.hashCode()
        result = 31 * result + (antiFloodIgnoredChannels?.contentHashCode() ?: 0)
        result = 31 * result + (antiCapsLockExcessiveIgnoredChannels?.contentHashCode() ?: 0)
        result = 31 * result + antiInvitesEnabled.hashCode()
        result = 31 * result + antiLinksEnabled.hashCode()
        result = 31 * result + antiSpamEnabled.hashCode()
        return result
    }
}