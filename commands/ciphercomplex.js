const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('complexcipher')
        .setDescription('Apply a more complex cipher to your text.')
        .addStringOption(option=>
          option.setName('text')
          .setDescription("The text to cipher")
          .setRequired(true)
        )
        .addIntegerOption(option=>
          option.setName("index")
          .setDescription("The ciphering index. Determines math behind the cipher."
          )
          
          .setRequired(true)
        )
        .addBooleanOption(option=>
          option.setName("private")
          .setDescription("Whether or not only you can see message and cipher")
          .setRequired(true)
        )
        ,
    async execute(interaction) {
        const idx=interaction.options.getInteger("index")
        const text=interaction.options.getString("text")
        const private=interaction.options.getBoolean("private")
        let msg=""
        for (let i=0;i<text.length;i++) {
          const char=text[i]
          msg+=String.fromCharCode(char+Math.pow(idx,2)-idx+(i**2%20));
        }
        interaction.reply({content:msg,ephemeral:private})
    }
};
