const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('rizzup')
        .setDescription('Pings user in a w-rizz fassion')
        .addUserOption(option =>
            option.setName('target')
                .setDescription('User to rizz up')
                .setRequired(true)
        ),
    async execute(interaction) {
        const target = interaction.options.getUser('target');

        // Pickup lines (same as your YAGPDB list)
        const pickupLines = [
            "Are you a charger? Because I'm dying without you",
            "Are you a Mariah Carey song? Because All I Want for Christmas Is You",
            "Are you Siri? Because you autocomplete me",
            "Angels should be in heaven. How'd you escape?",
            "Did you just come out of an oven? Because you're too hot to handle.",
            "You're looking a little sick, you must be suffering from lack of Vitamin Me.",
            "My mom told me not to talk to strangers online, but I'll make an exception for you.",
            "Do you have a Band-Aid? I scraped my knees falling for you.",
            "Do you like Star Wars? Because Yoda one for me.",
            "Are you from Tennessee? Because you're the only 10 I see",
            "On a scale of 1 to 10, you're a 9…because I'm the 1 you need",
            "I can't tell if that was an earthquake, or if you just seriously rocked my world.",
            "I'm not very good at math but I can give you the value you deserve.",
            "Are you a parking ticket? Because you've got 'fine' written all over you.",
            "Are you a cat? Because I've fallen fur you.",
            "Are your parents bakers? Because you're a cutie pie.",
            "Are your parents chefs? Because they really cooked when they made you.",
            "Can I show your profile to my friends to prove that angels really do exist?",
            "I think we've met before. Actually, never mind—I think it was just in my dreams.",
            "Trust me, I'm not drunk—I'm just intoxicated by you.",
            "I hope someone knows how to do CPR because you just took my breath away.",
            "Are you Google? You have everything I search for.",
            "Want to go outside and get some fresh air with me? You just took my breath away.",
            "Are your shoelaces tied? I don't want you falling for anyone else.",
            "All the good pickup lines are taken so I'll just take you",
            "are you a communist? cuz i feel an uprising in my lower class",
            "you know those gaps between your fingers? i think they were made for mine",
            "Damn, you looking like a microwave, cuz mmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmm beeep beeep beeep beeep",
            "are u a bullet cause i want u inside me",
            "i usually dont like my food with dressing. can i take yours off?",
            "Ford F-150… Ford F-250… Ram 1500… wait wrong kind of pick up line again, sh!t.",
            "can you help me with this problem? U + X = 25. I think X=15 cuz U sure are a 10",
            "not gonna use a pickup line, cause i'm tryna pin u down",
            "When I first saw you, my baby just went from sqrt(-100) to sqrt(100). Solid 10, only difference is one's imaginary."
        ];

        // Pick a random line
        const chosen = pickupLines[Math.floor(Math.random() * pickupLines.length)];

        
        // Convert both target mention and line
        const fullUser = `<@${target.id}>`
        const fullLine = chosen

        await interaction.reply({
            content: `💘 Hey ${fullUser}, ${fullLine}`
        });
    }
};
