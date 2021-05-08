plugins {
    id("org.jetbrains.kotlin.jvm") version "1.4.31"
    application
}

repositories {
    mavenCentral()
    maven(url = "https://jitpack.io/")
}

dependencies {
    implementation(platform("org.jetbrains.kotlin:kotlin-bom"))
    implementation("org.jetbrains.kotlin:kotlin-stdlib-jdk8")
    implementation("com.google.guava:guava:30.0-jre")
    implementation("com.github.Javacord", "Javacord", "development-SNAPSHOT")
    implementation("org.json", "json", "20210307")
    implementation("com.github.ascclemens", "khttp", "0.1.0")
}

application {
    mainClass.set("com.riorucorp.projects.riorubot.Rioru")
}

