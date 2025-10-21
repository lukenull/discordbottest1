const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('cipher')
        .setDescription('Apply a (Caesar) cipher to your text')
        .addStringOption(option=>
          option.setName('text')
          .setDescription("The text to cipher")
          .setRequired(true)
        )
        .addIntegerOption(option=>
          option.setName("index")
          .setDescription("The ciphering shift index (-25-25)"
          )
          .setMinValue(-25)
          .setMaxValue(25)
          .setRequired(true)
        )
        .addBooleanOption(option=>
          option.setName("private")
          .setDescription("Whether or not only you can see message and cipher")
          .setRequired(true)
        )
        ,
    async execute(interaction) {
        const numlet=interaction.options.getInteger("index")
        const text=interaction.options.getString("text")
        const private=interaction.options.getBoolean("private")
        let msg=""
        for (let i=0;i<text.length;i++) {
          const char=text[i]
          if (char>='A' && char<='Z') {
            msg+=String.fromCharCode(((char.charCodeAt(0) - 65 + numlet) % 26) + 65)
          } else if (char>='a' && char<='z') {
            msg+=String.fromCharCode(((char.charCodeAt(0) - 97 + numlet) % 26) + 97)
          } else {
            msg+=char;
          }
        }
        interaction.reply({content:msg,ephemeral:private})
    }
};
