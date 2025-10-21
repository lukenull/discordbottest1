const {parse} = require('mathjs')
const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');


const irand=(len)=>{return Math.floor(Math.random()*len)}
module.exports = {
    data: new SlashCommandBuilder()
        .setName('latex')
        .setDescription('generate LaTeX for a math expression.')
        .addStringOption(option=>
            option.setName("expression")
            .setDescription("Formula to generate LaTeX for")
            .setRequired(true)
        )
        ,
    async execute(interaction) {
       
        const latexe = interaction.options.getString("expression");
        const latex=parse(latexe).toTex();
        const encoded = encodeURIComponent(latex);
        const url = `https://latex.codecogs.com/png.latex?\\dpi{200}\\bg_white ${encodeURIComponent(latex)}`;


        const embed = new EmbedBuilder()
        .setTitle('LaTeX Render')
        .setImage(url);

        await interaction.reply({embeds:[embed]})
    }
};
