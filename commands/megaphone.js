const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('megaphone')
        .setDescription('Displays message in large text')
        .addStringOption(option =>
            option.setName('message')
                .setDescription('Message to shout')
                .setRequired(true)
        ),
    async execute(interaction) {
        const msg = interaction.options.getString('message');
        const username = interaction.user.username;

        // Helper function to convert text to fullwidth
        function toFullwidth(text) {
            let result = '';
            for (let i = 0; i < text.length; i++) {
                const char = text[i];
                if (char >= '!' && char <= '~') {
                    result += String.fromCharCode(char.charCodeAt(0) + 65248);
                } else {
                    result += char;
                }
            }
            return result;
        }

        const fullUsername = toFullwidth(username);
        const fullMsg = toFullwidth(msg);

        await interaction.reply({
            content: `# 📢@${fullUsername}:\n\n# ${fullMsg}`
        });
    }
};
