const { SlashCommandBuilder } = require('discord.js');
const stuff=[
    [
    "The FitnessGram™ Pacer Test is a multistage aerobic capacity test that progressively gets more difficult as it continues. The 20 meter pacer test will begin in 30 seconds. Line up at the start. The running speed starts slowly, but gets faster each minute after you hear this signal. [beep] A single lap should be completed each time you hear this sound. [ding] Remember to run in a straight line, and run as long as possible. The second time you fail to complete a lap before the sound, your test is over. The test will begin on the word start. On your mark, get ready, start."
  ],
  [
    "Connection terminated. I'm sorry to interrupt you, Elizabeth, if you still even remember that name, But I'm afraid you've been misinformed. You are not here to receive a gift, nor have you been called here by the individual you assume, although, you have indeed been called. You have all been called here, into a labyrinth of sounds and smells, misdirection and misfortune. A labyrinth with no exit, a maze with no prize. You don't even realize that you are trapped. Your lust for blood has driven you in endless circles, chasing the cries of children in some unseen chamber, always seeming so near, yet somehow out of reach, but you will never find them. None of you will. This is where your story ends. And to you, my brave volunteer, who somehow found this job listing not intended for you, although there was a way out planned for you, I have a feeling that's not what you want. I have a feeling that you are right where you want to be. I am remaining as well. I am nearby.",
    "This place will not be remembered, and the memory of everything that started this can finally begin to fade away. As the agony of every tragedy should. And to you monsters trapped in the corridors, be still and give up your spirits. They don't belong to you. For most of you, I believe there is peace and perhaps more waiting for you after the smoke clears. Although, for one of you, the darkest pit of Hell has opened to swallow you whole, so don't keep the devil waiting, old friend. My daughter, if you can hear me, I knew you would return as well. It's in your nature to protect the innocent. I'm sorry that on that day, the day you were shut out and left to die, no one was there to lift you up into their arms the way you lifted others into yours, and then, what became of you. I should have known you wouldn't be content to disappear, not my daughter. I couldn't save you then, so let me save you now. It's time to rest - for you, and for those you have carried in your arms. This ends for all of us. End communication."
  ],
  [
    "CAUSE YOU FRICKIN' FRICKS JUST CAN'T EVER BE QUENCHED! Your-your FANTASIES CAN NEVER BE QUENCHED, CAN THEY? YOU FRICKING FRICKS! WHEN WILL YOU LEARN?! WHEN WILL YOU LEARN?! THAT YOUR ACTIONS HAVE CONSEQUENCES!?"
  ],
  [
    "Oh, hello. You died. whaaat a shame. We haven't met before, but hopefully you'll be able to stay alive long enough to give myself a proper introduction. Since those iiidiots up there didn't feel like telling you about which exact dangers you'd face down here, I've been asked to fill that role. Whenever you die, you'll be brought here, and I'll show you a document detailing what caused your oh-so-early demise. He was very specific with... how much information I can share with you though. It's stupid, I know, his orders, not mine. All the documents are heavily classified, lots of black lines, redacted text, whole nine yards. The more times you die to something, the more black lines he lets me remove. Alright. Let me find what caused your... Ahhh. Here we go."
  ]
]
module.exports = {
    data: new SlashCommandBuilder()
        .setName('saysthg')
        .setDescription('Says a random thing someone else said somewhere')
        ,
    async execute(interaction) {
        const chosen=stuff[Math.floor(Math.random()*stuff.length)]
        await interaction.reply(chosen[0]);
        if (chosen.length>1) {
            for (let i=0;i>chosen.length;i++) {
                await interaction.followUp(chosen[1])
            }
        }
    }
};
