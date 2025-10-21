const { SlashCommandBuilder } = require('discord.js');

const choice=[[["r","rock"],["Rock","🪨",0]],[["p","paper"],["Paper","📄",1]],[["s","scissors"],["Scissors","✂️",2]]]
const wn=["I win.","It's a tie.","You win."]
module.exports = {
    data: new SlashCommandBuilder()
        .setName('rps')
        .setDescription('Play rock-paper-scissors.')
        .addStringOption(option=>
            option.setName('choice')
            .setDescription('Your choice (r, p, s, rock, paper, scissors)')
            .setRequired(true)
        ) ,
    async execute(interaction) {
        const input=interaction.options.getString("choice")
        let msg="ERROR: Invalid input"
        for (let c of choice) {
            if (c[0].includes(input.toLowerCase())) {
                const ca=c[1]
                const bca=choice[Math.floor(Math.random()*choice.length)][1]
                const widx=(ca[2]+1)%3<(bca[2]+1)%3?2:((ca[2]+1)%3>(bca[2]+1)%3?0:1)
                msg=`You picked **${ca[0]} (${ca[1]})**.
                I pick **${bca[0]} (${bca[1]})**.
                *${wn[widx]}*
                `
                break;
            }
        }
        await interaction.reply(msg)
    }
};
