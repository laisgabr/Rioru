rootProject.name = "rioru"
include("rioru", "utilities", "database")

pluginManagement {
    repositories {
        gradlePluginPortal()
    }

    resolutionStrategy {
        eachPlugin {
            if (requested.id.id.startsWith("org.jetbrains.kotlin.jvm")) useVersion("1.5.21")
        }
    }
}
