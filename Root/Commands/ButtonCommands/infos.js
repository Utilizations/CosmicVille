const config = require("../../../Config");
const Discord = require("discord.js")

module.exports = {
    name : 'info',
    run : async(client, interaction, container) => {
        const modal = new Discord.Modal()
        .setCustomId('info')
        .setTitle('Post your Info')

        const IGN = new Discord.TextInputComponent()
        .setCustomId('ign1')
        .setLabel('Your IGN.')
        .setStyle('SHORT')

        const HIRED = new Discord.TextInputComponent()
        .setCustomId('hired')
        .setLabel('Hired By.')
        .setStyle('SHORT')

        const EMAIL = new Discord.TextInputComponent()
        .setCustomId('email')
        .setLabel('Your Email.')
        .setStyle('SHORT')

        const JOIN = new Discord.TextInputComponent()
        .setCustomId('join')
        .setLabel('Join Date')
        .setStyle('SHORT')
        const firstActionRow = new Discord.MessageActionRow().addComponents(IGN);
        const secondActionRow = new Discord.MessageActionRow().addComponents(HIRED);
        const thirdActionRow = new Discord.MessageActionRow().addComponents(EMAIL);
        const forthActionRow = new Discord.MessageActionRow().addComponents(JOIN);
		modal.addComponents(firstActionRow, secondActionRow, thirdActionRow, forthActionRow);
		await interaction.showModal(modal);
    }
}