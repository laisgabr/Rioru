rootProject.name = "rioru"
include("rioru", "utilities")

pluginManagement {
    repositories {
        gradlePluginPortal()
    }

    resolutionStrategy {
        eachPlugin {
            if (requested.id.id.startsWith("org.jetbrains.kotlin.jvm")) useVersion("1.5.20")
        }
    }
}
