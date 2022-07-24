const Discord = require("discord.js")
const config = require("../../Config");

module.exports = {
    name: "interactionCreate",
    run: async(interaction, client) => {
        const loadCommandOptions = require("../Structures/CommandOptions/loadCommandOptions")
        if (interaction.isButton()) loadCommandOptions(client, interaction, client.commands.buttonCommands.get(interaction.customId), true, "Button")
        else if (interaction.isSelectMenu()) loadCommandOptions(client, interaction, client.commands.selectMenus.get(interaction.values[0] ?? interaction.customId), true, "SelectMenus")
        else if (interaction.isCommand()) loadCommandOptions(client, interaction, client.commands.slashCommands.get(interaction.commandName), true, "SlashCommand")
        else if (interaction.isContextMenu()) loadCommandOptions(client, interaction, client.commands.contextMenus.get(interaction.commandName), true, "ContextMenus")

        if (!interaction.isModalSubmit()) return;

        if (interaction.customId === 'info') {
            const ign = interaction.fields.getTextInputValue('ign1')
            const hired = interaction.fields.getTextInputValue('hired')
            const email = interaction.fields.getTextInputValue('email')
            const join = interaction.fields.getTextInputValue('join')

            const embed1 = new Discord.MessageEmbed()
            .setTitle('New Info logged.')
            .setDescription(`
            ${interaction.member} has posted their Info.
            `)
            .addField('IGN', ign)
            .addField('Hired By', hired, true)
            .addField('Email', email, true)
            .addField('Join Date', join, true)
            interaction.reply({embeds: [embed1]})
        }
        if (interaction.customId === 'absence') {
            const ign = interaction.fields.getTextInputValue('ign')
            const start = interaction.fields.getTextInputValue('start')
            const end = interaction.fields.getTextInputValue('end')
            const reason = interaction.fields.getTextInputValue('reason')

            const embed1 = new Discord.MessageEmbed()
            .setTitle('New Absence logged.')
            .setDescription(`
            ${interaction.member} has posted an Absence.
            `)
            .addField('IGN', ign)
            .addField('Start Date', start, true)
            .addField('End Date', end, true)
            .addField('Reason', reason, true)
            interaction.reply({embeds: [embed1]})
        }
        if (interaction.customId === 'punishment') {
            const ign = interaction.fields.getTextInputValue('ign2')
            const punished = interaction.fields.getTextInputValue('punished')
            const proof = interaction.fields.getTextInputValue('evidence')
            const reason = interaction.fields.getTextInputValue('reason1')

            const embed1 = new Discord.MessageEmbed()
            .setTitle('New Punishment logged.')
            .setDescription(`
            ${interaction.member} has posted a Punishment log.
            `)
            .addField('IGN', ign)
            .addField('Punished', punished, true)
            .addField('Proof', proof, true)
            .addField('Reason', reason, true)
            interaction.reply({embeds: [embed1]})
        }
    }
}