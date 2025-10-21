const { SlashCommandBuilder } = require('discord.js');

const repl={
    "l":"w",
    "r":"w","x":"ksh","th":"d","s":"sh"
}
module.exports = {
    data: new SlashCommandBuilder()
        .setName('uwuify')
        .setDescription('Phonetically alters message for maximum cuteness and uwuification.')
        .addStringOption(option=>
            option.setName('message')
            .setDescription('message to uwuify')
            .setRequired(true)
        ) ,
    async execute(interaction) {
        const input=interaction.options.getString("message")
        let msg=input
        for (let k in repl) {
            msg=msg.replace(k,repl[k])
        }
        msg=`\`~${msg}~\``
        await interaction.reply(msg);
    }
};
