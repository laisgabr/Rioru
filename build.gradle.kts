plugins {
    id("org.jetbrains.kotlin.jvm") version "1.4.20"
    application
}

repositories {
    jcenter()
    mavenCentral()
    maven(url = "https://m2.dv8tion.net/releases") {
        name = "m2-dv8tion"
    }
    maven(url = "https://jitpack.io")
}

dependencies {
    implementation(platform("org.jetbrains.kotlin:kotlin-bom"))
    implementation("org.jetbrains.kotlin:kotlin-stdlib-jdk8")
    implementation("com.google.guava:guava:29.0-jre")
    implementation("org.jetbrains:kotlin-css-jvm:1.0.0-pre.129-kotlin-1.4.20")
    implementation("io.ktor:ktor-server-core:1.5.3")
    implementation("io.ktor:ktor-server-netty:1.5.3")
    implementation("io.ktor:ktor-html-builder:1.5.2")
    implementation("org.json:json:20210307")
    implementation("net.dv8tion:JDA:4.2.1_262")
    implementation("com.github.ShadowB64:UsagiAPISimple:7724995560")
    implementation("khttp:khttp:1.0.0")
    implementation("com.sedmelluq:lavaplayer:1.3.75")
    implementation("org.openjdk.nashorn:nashorn-core:15.2")
}

application {
    mainClass.set("com.github.shadowb64.rioru.RioruLauncherKt")
}

java {
    sourceCompatibility = JavaVersion.VERSION_15
}
