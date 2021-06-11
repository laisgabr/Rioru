plugins {
    id("org.jetbrains.kotlin.jvm") version("1.5.0")
    application
}

repositories {
    mavenCentral()
    google()
    maven(url = "https://jitpack.io")
    maven(url = "https://m2.dv8tion.net/releases")
}

dependencies {
    implementation(project(":rioru-utilities"))
    implementation(project(":caramel"))
    api("com.google.guava:guava:30.0-jre")
    implementation("org.json", "json", "20210307")
    implementation("com.sedmelluq", "lavaplayer", "1.3.77")
    implementation("com.github.DV8FromTheWorld", "JDA", "development-SNAPSHOT")
    implementation(platform("org.jetbrains.kotlin:kotlin-bom"))
    implementation("org.jetbrains.kotlin:kotlin-stdlib-jdk8")
}

java {
    sourceCompatibility = JavaVersion.VERSION_16
}

application {
    mainClass.set("com.riorucorp.projects.rioru.RioruLauncherKt")
}
