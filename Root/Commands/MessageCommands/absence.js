const Discord = require("discord.js");
const config = require("../../../Config");

module.exports = {
    name: "absence",
    run: async(client, message, args, container) => {
        message.delete()
        const embed = new Discord.MessageEmbed()
        .setTitle("Post an absence.")
        .setDescription("If you are not going to be online for more 2 days or more, please click the button bellow and fill out the form.")
        .setColor('YELLOW')

        const row = new Discord.MessageActionRow().addComponents(
            new Discord.MessageButton()
            .setCustomId('absence')
            .setLabel('Post an absence.')
            .setStyle('DANGER')
        )
         message.channel.send({embeds: [embed], componenets: [row]})

    }
}