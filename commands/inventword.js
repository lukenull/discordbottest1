const { SlashCommandBuilder } = require('discord.js');
const dent=["n","d","t"]
const velar=["k","g","c"]
const labiodent=["v","f"]
const bilab=["p","b","m"]
const ext=["ch","sh","s","z"]
const vowel=["a","e","i","o","u"]
const spec=["r","l"]
const cons=["b","c","d","f","g","h","k","l","r","p","s","t","v","x","z"]
const end=["ition","ation","ution","otion","ic"]
const all=[dent,velar,labiodent,bilab,ext,vowel,spec]

const irand=(len)=>{return Math.floor(Math.random()*len)}
module.exports = {
    data: new SlashCommandBuilder()
        .setName('inventword')
        .setDescription('Invent a new word (convincing).')
        .addNumberOption(option=>
            option.setName("charactercount")
            .setDescription("number of characters, plus or minus a few due to clusters.")
            .setRequired(true)
            
        )
        ,
    async execute(interaction) {
        let msg=""
        const ct=interaction.options.getNumber("charactercount")
        const st=Math.floor(Math.random()*7)
        let sv=all[st]
        let llen=0
        let clen=0
        let cl
        for (let i=0;i<ct;i++) {
            let cl2=sv[Math.floor(Math.random()*sv.length)]
            while (cl2==cl) {
                cl2=sv[Math.floor(Math.random()*sv.length)]
            }
            cl=cl2
            msg+=cl
            
            if (cons.includes(cl)) {
                const cuc=Math.random()*100
                console.log(cuc)
                if (cuc<30 && llen<2 && sv!=spec && clen<3 && i>=3) {
                    for (let k of all) {
                        if (k.includes(cl)) {
                            sv=k;
                            llen+=1;
                            clen+=1;
                            console.log(llen)
                            break
                        }
                    }
                } else {
                    sv=(vowel.includes(cl)?cons:vowel);
                    if (sv==cons) {
                        clen+=1
                    } else {
                        clen=0;
                    }
                    llen=0;
                }
            } else {
                const cuc=Math.random()*100
                if (cuc<80) {
                    sv=cons;
                }
            }
            if (i==ct-1) {
                if (vowel.includes(cl)) {
                    msg+=cons[irand(cons.length)]

                }
                msg+=end[irand(end.length)]
            }
        }
        await interaction.reply(msg)
    }
};
