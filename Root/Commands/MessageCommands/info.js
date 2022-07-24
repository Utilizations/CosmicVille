const Discord = require("discord.js");
const config = require("../../../Config");

module.exports = {
    name: "info",
    run: async(client, message, args, container) => {
        message.delete()
        const embed = new Discord.MessageEmbed()
        .setTitle("Post your Info")
        .setDescription("Upon joining CosmicVille staff we request you to fill out this form so we have your detail on hand. Please fill out the form by clicking the button bellow.")

        const row = new Discord.MessageActionRow().addComponents(
            new Discord.MessageButton()
            .setCustomId('info')
            .setLabel('Post Info.')
            .setStyle('SUCCESS')
        )
        message.channel.send({embeds: [embed], components: [row]})
    }
}