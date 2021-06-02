plugins {
    id("org.jetbrains.kotlin.jvm") version("1.5.0")
}

repositories {
    mavenCentral()
}

dependencies {
    implementation(project(":rioru-utilities"))
    implementation(platform("org.jetbrains.kotlin:kotlin-bom"))
    implementation("org.jetbrains.kotlin:kotlin-stdlib-jdk8")
    implementation("io.ktor:ktor-server-core:1.5.3")
    implementation("io.ktor:ktor-server-netty:1.5.3")
}

java {
    sourceCompatibility = JavaVersion.VERSION_16
}