module.exports = {
    Command: require('./Structures/Util/Command'),
    Listener: require('./Structures/Util/Listener'),
    Mongoose: require('./Database/Mongoose'),
    
    ZoeEmojis: require('./Structures/ZoeEmojis'),
    ZoeManager: require('./Music/ZoeManager'),
    ZoePlayer: require('./Music/ZoePlayer'),
    ZoeEmbedBuilder: require('./Structures/Util/ZoeEmbedBuilder'),

    i18: require('./Structures/i18n/t'),
    SetServerLocale: require('./Structures/i18n/SetServerLocale'),
    
    Utils: require('./Structures/Command/Utils/Utils'),
    CommandContext: require('./Structures/Command/CommandContext'),
    CommandExecuter: require('./Structures/Command/CommandExecuter'),
    CommandOptions: require('./Structures/Command/CommandOptions'),
    BlacklistChecker: require('./Structures/Command/Utils/BlacklistChecker'),
    
    AntiRaid: require('./Structures/System/AntiRaid'),
    AntiLinks: require('./Structures/System/AntiLinks'),
    AntiBots: require('./Structures/System/AntiBots'),
    AntiFlood: require('./Structures/System/AntiFlood')
}