plugins {
    kotlin("js")
}

kotlin {
    js {
        nodejs {}
        binaries.executable()
    }
}

repositories {
    mavenCentral()
}

dependencies {
    constraints {
        implementation("org.jetbrains.kotlin:kotlin-stdlib-js")
    }
}