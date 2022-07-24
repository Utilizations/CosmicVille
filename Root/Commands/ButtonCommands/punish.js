const config = require("../../../Config");
const Discord = require("discord.js")

module.exports = {
    name : 'punishment',
    run : async(client, interaction, container) => {
        const modal = new Discord.Modal()
        .setCustomId('punishment')
        .setTitle('Post your Punishment')

        const IGN = new Discord.TextInputComponent()
        .setCustomId('ign2')
        .setLabel('Your IGN.')
        .setStyle('SHORT')

        const PUNISHED = new Discord.TextInputComponent()
        .setCustomId('punished')
        .setLabel('Punished users IGN.')
        .setStyle('SHORT')

        const EVIDENCE = new Discord.TextInputComponent()
        .setCustomId('evidence')
        .setLabel('Evidence')
        .setStyle('SHORT')

        const REASON = new Discord.TextInputComponent()
        .setCustomId('reason1')
        .setLabel('Reason for punishment')
        .setStyle('SHORT')
        const firstActionRow = new Discord.MessageActionRow().addComponents(IGN);
        const secondActionRow = new Discord.MessageActionRow().addComponents(PUNISHED);
        const thirdActionRow = new Discord.MessageActionRow().addComponents(EVIDENCE);
        const forthActionRow = new Discord.MessageActionRow().addComponents(REASON);
		modal.addComponents(firstActionRow, secondActionRow, thirdActionRow, forthActionRow);
		await interaction.showModal(modal);
    }
}