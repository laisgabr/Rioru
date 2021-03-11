package com.github.mrdrooxbr.rioru.dashboard.controller

import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.PathVariable
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController

@RestController
@RequestMapping("/dashboard")
class DashboardController {

    @GetMapping("/{id}")
    fun main(@PathVariable id: Int) {
        if(" if com a condição pra fazer redirect se não tiver logado ".isEmpty())  main1()
    }

    @GetMapping("/")
    fun main1() {

    }
}