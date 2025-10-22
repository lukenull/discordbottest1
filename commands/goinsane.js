const { SlashCommandBuilder } = require('discord.js');
async function wait(s) {
  await new Promise(resolve => setTimeout(resolve, s*1000));
}
function generatezalgo(text = "A") {
  const zalgoUp = ["̍","̎","̄","̅","̿","̑","̆","̐","͒","͗","͑","̇","̈","̊","͂","̓","̈","͊","͋","͌","̃","̂","̌","͐","̀","́","̋","̏","̒","̓","̔","̽","̉","ͣ","ͤ","ͥ","ͦ","ͧ","ͨ","ͩ","ͪ","ͫ","ͬ","ͭ","ͮ","ͯ","̾","͛","͆","̚"];
  const zalgoMid = ["̕","̛","̀","́","͘","̡","̢","̧","̨","̴","̵","̶","͜","͝","͞","͟","͠","͢","̸","̷","͡","҉"];
  const zalgoDown = ["̖","̗","̘","̙","̜","̝","̞","̟","̠","̤","̥","̦","̩","̪","̫","̬","̭","̮","̯","̰","̱","̲","̳","̹","̺","̻","̼","ͅ","͇","͈","͉","͍","͎","͓","͔","͕","͖","͙","͚","̣"];

  const pick = arr => arr[Math.floor(Math.random() * arr.length)];

  let zalgoText = "";
  for (let char of text) {
    zalgoText += char;
    const countUp = 5 + Math.floor(Math.random() * 8);
    const countMid = 2 + Math.floor(Math.random() * 4);
    const countDown = 5 + Math.floor(Math.random() * 8);
    for (let i = 0; i < countUp; i++) zalgoText += pick(zalgoUp);
    for (let i = 0; i < countMid; i++) zalgoText += pick(zalgoMid);
    for (let i = 0; i < countDown; i++) zalgoText += pick(zalgoDown);
  }

  return zalgoText;
}
module.exports = {
    data: new SlashCommandBuilder()
        .setName('goinsane')
        .setDescription('IMMA CRASH OUT RN')
        .addIntegerOption(option=>
          option.setName("len")
          .setDescription("length???????")
          .setRequired(true)
          .setMaxValue(30)
          .setMinValue(5)
        )
        ,
    async execute(interaction) {
        const len=interaction.options.getInteger("len")
        await interaction.reply("_");
        await wait(1)
        await interaction.editReply("a");
        await wait(0.2)
        await interaction.editReply("_");
        await wait(1)
       await  interaction.editReply("AAh");
        await wait(0.2)
        await interaction.editReply("_");
        await wait(1)
        await interaction.editReply("_")
        await wait(0.2)
        for (let i=1;i<len;i++) {
         await interaction.editReply(generatezalgo("A".repeat(i*3)))
         // await wait(0.05);
        }
        for (let i=5;i<len*5+5;i++) {
          let re=generatezalgo("\n".repeat(i%14)+"A".repeat(30)+"\n".repeat(14-i%14 + 1));
          await interaction.editReply(re)
         // await wait(0.1);
        }
        for (let i=5;i<len*6+5;i++) {
          try {
            let re="";
          for (let j=0;j<i;j++) {
            re+="A".repeat(j);
            re+="\n"
          }
          re=generatezalgo(re);
          await interaction.editReply(re);
          } catch {
            console.log("there was an error")
          }
          
         // await wait(0.1);
        }
        await interaction.followUp("Ok I'm done now, carry on")
    }
};
