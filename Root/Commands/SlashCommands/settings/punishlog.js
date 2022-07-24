const { Client, CommandInteraction, MessageEmbed } = require("discord.js");
const discord = require("discord.js")
const config = require("../../../../Config");

module.exports = {
    name: "punishlog",
    description: "Post the absence log embed.",
    /**
     * 
     * @param {Client} client 
     * @param {CommandInteraction} interaction 
     */
     run: async(client, interaction, container) => {
        const embed = new MessageEmbed()
        .setTitle("Post a Punishment Log.")
        .setDescription("If you have just punished a player in-game please fill out the form by clicking the button bellow.")

        const row = new discord.MessageActionRow().addComponents(
            new discord.MessageButton()
            .setCustomId('punishment')
            .setLabel('Post a punishment.')
            .setStyle('DANGER')
        )
        interaction.channel.send({embeds: [embed], componenets: [row]})
    }
}