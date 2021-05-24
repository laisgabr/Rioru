package com.riorucorp.projects.rioru

import com.riorucorp.projects.rioru.utilities.Logger

fun main() {
    Logger.info {
        """
    Specifications: 
        Operational System:
            Name: ${getProp("os.name")}
            Version: ${getProp("os.version")}
            Architecture: ${getProp("os.arch")}
        Java:
            Version: ${getProp("java.specification.version")}
            Vendor: ${getProp("java.vendor")}(${getProp("java.vendor.url")})
            Date: ${getProp("java.version.date")}
            Java_Home Variable: ${getProp("java.home")}
        Kotlin:
            Version: ${KotlinVersion.CURRENT}
        """
    }
    try {
        Rioru.createMyInstance()
    } catch (e: Exception) {
        Logger.error { "${e.message}" }
    }
}

fun getProp(property: String): String = System.getProperty(property)