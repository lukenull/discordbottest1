require('dotenv').config();
const fs = require('fs');
const { REST, Routes } = require('discord.js');
const { clientId, guildIds } = require('./config.json');

const commands = [];
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

// Load command files
for (const file of commandFiles) {
    const command = require(`./commands/${file}`);
    commands.push(command.data.toJSON());
}

const rest = new REST({ version: '10' }).setToken(process.env.TOKEN);

(async () => {
    try {
        console.log('Started refreshing guild (/) commands for multiple servers.');

        for (const guildId of guildIds) {
            await rest.put(
                Routes.applicationGuildCommands(clientId, guildId),
                { body: commands },
            );
            console.log(`Successfully registered commands for guild: ${guildId}`);
        }

        console.log('All guild commands deployed successfully.');
    } catch (error) {
        console.error(error);
    }
})();
