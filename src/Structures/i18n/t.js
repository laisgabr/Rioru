module.exports =  class i18 {
    constructor(client, guild) {
        this.client = client;
        
        const i18next = require('i18next')
        const translationBackend = require('i18next-node-fs-backend')
        const { readdirSync } = require('fs')
        
        const e = 'Errors'
        const m = 'Music'
        const f = 'Fun'
        const ev = 'Events'
        const u = 'Utils'
        const so = 'Social'
        
        var t;
        const setFixedT = function(translate) {
            t = translate
        };
        
        const language = guild.locale || "pt-BR"
        setFixedT(i18next.getFixedT(language))
        
        i18next.use(translationBackend).init({
            ns: [e, m, f, ev, u, so],
            preload: readdirSync('./src/Structures/i18n/Locales'),
            fallbackLng: 'pt-BR',
            backend: {
                loadPath: `./src/Structures/i18n/Locales/{{lng}}/{{ns}}.json`
            },
            interpolation: {
                escapeValue: false
            },
            returnEmptyString: false
        })
        
        this.client.t = t;
        
        module.exports = t;
    }
}