plugins {
    kotlin("jvm")
    `java-library`
}


dependencies {
    api(kotlin("script-util"))
    api(kotlin("compiler"))
    api(kotlin("scripting-compiler"))
    api(kotlin("scripting-jsr223"))
}