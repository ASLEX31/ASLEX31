const Owen = require("../../bot.js")
const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {
 
    ALIVE_STR = Owen.randomstring([
        "`️deneme 1.2.3  ",
    ])
    await Owen.editmsg(message,ALIVE_STR)
    
    }

module.exports.config = {
    command: "yarrak"
}
