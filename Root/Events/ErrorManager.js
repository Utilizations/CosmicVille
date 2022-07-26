const discord = require("discord.js")
const config = require("../../Config")

module.exports = {
    name: "errorManager",
    customEvent: true,
    run: async(client) => {
        process.on('unhandledRejection', error => {
            console.log(error)
        })
        process.on('uncaughtException', error => {
            console.log(error)
        })
    }
}