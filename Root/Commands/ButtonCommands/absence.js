const config = require("../../../Config");
const Discord = require("discord.js")

module.exports = {
    name : 'absence',
    run : async(client, interaction, container) => {
        const modal = new Discord.Modal()
        .setCustomId('absence')
        .setTitle('Post your absence')

        const IGN = new Discord.TextInputComponent()
        .setCustomId('ign')
        .setLabel('Your IGN.')
        .setStyle('SHORT')

        const START = new Discord.TextInputComponent()
        .setCustomId('start')
        .setLabel('Start Date.')
        .setStyle('SHORT')

        const END = new Discord.TextInputComponent()
        .setCustomId('end')
        .setLabel('End Date.')
        .setStyle('SHORT')

        const REASON = new Discord.TextInputComponent()
        .setCustomId('reason')
        .setLabel('Reason for absence.')
        .setStyle('PARAGRAPH')
        const firstActionRow = new Discord.MessageActionRow().addComponents(IGN);
        const secondActionRow = new Discord.MessageActionRow().addComponents(START);
        const thirdActionRow = new Discord.MessageActionRow().addComponents(END);
        const forthActionRow = new Discord.MessageActionRow().addComponents(REASON);
		modal.addComponents(firstActionRow, secondActionRow, thirdActionRow, forthActionRow);
		await interaction.showModal(modal);
    }
}