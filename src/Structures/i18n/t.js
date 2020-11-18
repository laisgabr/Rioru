module.exports =  class i18 {
    constructor(client, guild) {
        this.client = client;
        
        const i18next = require('i18next')
        const translationBackend = require('i18next-node-fs-backend')
        const { readdirSync } = require('fs')
        
        var t;
        const setFixedT = function(translate){
            t = translate
        };
        
        const language = guild.locale || "pt-BR"
        setFixedT(i18next.getFixedT(language))
        
        i18next.use(translationBackend).init({
            ns: ['commands', 'errors', 'permissions'],
            preload: readdirSync('./src/Locales'),
            fallbackLng: 'pt-BR',
            backend: {
                loadPath: `./src/Locales/{{lng}}/{{ns}}.json`
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