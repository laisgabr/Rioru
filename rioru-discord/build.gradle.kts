plugins {
    id("org.jetbrains.kotlin.jvm") version("1.5.0")
    application
}

repositories {
    mavenCentral()
    google()
    maven(url = "https://jitpack.io")
}

dependencies {
    implementation(project(":rioru-utilities"))
    api("com.google.guava:guava:30.0-jre")
    api(kotlin("script-util"))
    api(kotlin("compiler"))
    api(kotlin("scripting-compiler"))
    api(kotlin("scripting-jsr223"))
    implementation("org.json", "json", "20210307")
    implementation("io.ktor:ktor-server-core:1.5.3")
    implementation("io.ktor:ktor-server-netty:1.5.3")
    implementation("com.github.Javacord", "Javacord", "development-SNAPSHOT")
    implementation(platform("org.jetbrains.kotlin:kotlin-bom"))
    implementation("org.jetbrains.kotlin:kotlin-stdlib-jdk8")
}

java {
    sourceCompatibility = JavaVersion.VERSION_16
}

application {
    mainClass.set("com.riorucorp.projects.rioru.RioruLauncherKt")
}
