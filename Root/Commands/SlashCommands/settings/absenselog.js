const { Client, CommandInteraction, MessageEmbed, MessageActionRow, discord} = require("discord.js");
const config = require("../../../../Config");

module.exports = {
    name: "absencelog",
    description: "Post the absence log embed.",
    /**
     * 
     * @param {Client} client 
     * @param {CommandInteraction} interaction 
     */
     run: async(client, interaction, container) => {
        const embed = new MessageEmbed()
        .setTitle("Post an absence.")
        .description("If you are not going to be online for more 2 days or more, please click the button bellow and fill out the form.")

        const row = new MessageActionRow().addCompenents(
            new discord.MessageButton()
            .setCustomId('absence')
            .setLabel('Post an absence.')
            .setStyle('DANGER')
        )
        interaction.channel.send({embeds: [embed], componenets: [row]})
    }
}