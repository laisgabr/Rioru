package com.github.mrdrooxbr.rioru.dashboard.api

import org.springframework.web.bind.annotation.PostMapping
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController

@RestController
@RequestMapping("/api/v2/oauth")
class OAuth2Router {
    @PostMapping("/")
    fun getUser(): String {
        return ""
    }

}