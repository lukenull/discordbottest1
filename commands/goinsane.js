const { SlashCommandBuilder } = require('discord.js');
async function wait(s) {
  await new Promise(resolve => setTimeout(resolve, s*1000));
}
module.exports = {
    data: new SlashCommandBuilder()
        .setName('goinsane')
        .setDescription('IMMA CRASH OUT RN')
        .addIntegerOption(option=>
          option.setName("aaaaaaaa")
          .setDescription("???????")
          .setRequired(true)
        )
        ,
    async execute(interaction) {
        const len=interaction.options.getInteger("aaaaaaaa")
        await interaction.reply("‌");
        await wait(1)
        await interaction.editReply("a");
        await wait(0.2)
        await interaction.editReply("‌");
        await wait(1)
       await  interaction.editReply("AAh");
        await wait(0.2)
        await interaction.editReply("‌");
        await wait(1)
        await interaction.editReply("‌")
        await wait(0.2)
        for (let i=0;i<len*4;i++) {
         await  interaction.editReply("A‌".repeat(i))
          await wait(0.05);
        }
        for (let i=0;i<len*10;i++) {
          let re="\n‌".repeat(i%14)+"A‌".repeat(17)+"\n‌".repeat((14-i)%14);
          await interaction.editReply(re)
          await wait(0.1);
        }
    }
};
