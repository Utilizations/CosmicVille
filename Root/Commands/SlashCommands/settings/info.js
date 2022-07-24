const { Client, CommandInteraction, MessageEmbed, MessageActionRow, MessageButton} = require("discord.js");
const config = require("../../../../Config");

module.exports = {
    name: "info",
    description: "Post the absence log embed.",
    /**
     * 
     * @param {Client} client 
     * @param {CommandInteraction} interaction 
     */
     run: async(client, interaction, container) => {
        const embed = new MessageEmbed()
        .setTitle("Post your Info")
        .setDescription("Upon joining CosmicVille staff we request you to fill out this form so we have your detail on hand. Please fill out the form by clicking the button bellow.")

        const row = new MessageActionRow().addCompenents(
            new MessageButton()
            .setCustomId('info')
            .setLabel('Post Info.')
            .setStyle('SUCCESS')
        )
        interaction.channel.send({embeds: [embed], componenets: [row]})
    }
}