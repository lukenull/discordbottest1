const { SlashCommandBuilder } = require('discord.js');
const {GoogleGenAI} = require('@google/genai');
const genai=new GoogleGenAI({apiKey:"AIzaSyADqhDUi7AtokXTm-cWQ0fU-1Y521gJ5VA"})
module.exports = {
    data: new SlashCommandBuilder()
        .setName('actuallyrespond')
        .setDescription("I'll actually respond to what you tell me. But I don't remember stuff you tell me previously.")
        .addStringOption(option=>
            option.setName('message')
            .setDescription('message to me')
            .setRequired(true)
        ) ,
    async execute(interaction) {
        const input=interaction.options.getString("message")
        const togem=`Respond to the user's message in a dark, sarcastic, slightly existential tone, as if you hate the user and think too much about existence: ${input}`
        await interaction.channel.sendTyping();
        const dn=Date.now();
        const stream=await genai.models.generateContentStream({
        model: 'gemini-2.5-flash-lite',
        contents: [{ role: 'user', parts: [{ text: togem }] }],
        generationConfig: {
            maxOutputTokens: 120,  
            temperature: 0.9,     
            topP: 0.8,            
            topK: 30,             
        }

        });
        let fullresp=""
        for await (const chunk of stream) {
            fullresp+=chunk.text;

        }
        if (Date.now()-dn<5) {
            await new Promise(resolve => setTimeout(resolve, 4000));
        }
        await interaction.reply(fullresp);
        
    }
};
