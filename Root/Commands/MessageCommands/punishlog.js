const Discord = require("discord.js");
const config = require("../../../Config");

module.exports = {
    name: "punishlog",
    run: async(client, message, args, container) => {
        message.delete()
        const embed = new Discord.MessageEmbed()
        .setTitle("Post a Punishment Log.")
        .setDescription("If you have just punished a player in-game please fill out the form by clicking the button bellow.")

        const row = new Discord.MessageActionRow().addComponents(
            new Discord.MessageButton()
            .setCustomId('punishment')
            .setLabel('Post a punishment.')
            .setStyle('DANGER')
        )
        message.channel.send({embeds: [embed], components: [row]})
    }
}