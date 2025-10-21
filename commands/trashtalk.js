const { SlashCommandBuilder } = require('discord.js');
const adj = [
            "stupid",
            "terrible",
            "an idiot",
            "horrible",
            "bad",
            "dumb",
            "ugly",
            "mean",
            "ritardando",
            "a bad person",
            "worthless",
            "a worthless human being",
            "an animal",
            "trash",
            "garbage",
            "poop",
            "dog shart",
            "a pile of worthlessness",
            "fcking stoopid",
            "a disgrace to humanity",
            "a pitiful excuse for a human being",
            "damned"
            ];

const nonadj = [
"sucks",
"should die",
"deserves to be annihilated",
"needs their life taken",
"always messes everything up",
"makes everyone mad",
"sucks more than outer space",
"is fatter than Kim Jong un",
"needs therapy",
"belongs in the dumpster"
];

module.exports = {
    data: new SlashCommandBuilder()
        .setName('trashtalk')
        .setDescription('Insults (user) in (count) sentences.')
        .addUserOption((option) =>
            option.setName('target')
            .setDescription("The user to trashtalk")
            .setRequired(true)
        )
        .addNumberOption((option)=>
            option.setName("count")
            .setDescription("Number of insults/sentences")
            .setRequired(true)
        )
                  ,
    async execute(interaction) {
        const user = interaction.options.getUser('target');
        const usermen = `<@${user.id}>`
        const count=interaction.options.getNumber('count')
        let msg=""
        for (let i=0;i<count;i++) {
            const rand=Math.floor(Math.random()*100)
            if (rand<72) {
                msg+=`${usermen} is ${adj[Math.floor(Math.random()*adj.length)]}. `;
            } else {
                msg+=`${usermen} ${nonadj[Math.floor(Math.random()*nonadj.length)]}. `;
            }
            
        }
        await interaction.reply(msg);
    }
};
