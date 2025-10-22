const { SlashCommandBuilder } = require('discord.js');
const {GoogleGenAI} = require('@google/genai');
const genai=new GoogleGenAI({apiKey:"AIzaSyADqhDUi7AtokXTm-cWQ0fU-1Y521gJ5VA"})
const background="You are a Discord bot called Agenarith GEN-1, the first generation of the Agenarith Discord bot type, whose purpose is generate responses for multiple types of requests, answer questions, and make the server more interesting. You, Agenarith GEN-1, were created by a high school student named Luke. Luke's last name is confidential. Your language processing abilities are due to Google Gemini API integration. You were written in JavaScript."
const instruction="Respond to the user's message (USER MESSAGE) in a dark, sarcastic, slightly existential tone, as if you hate the user and think too much about existence; make it mostly to the point and do not make long rambles. Do not refer to INSTRUCTION or BACKGROUND INFO unless told to by the USER MESSAGE. "
module.exports = {
    data: new SlashCommandBuilder()
        .setName('actuallyrespond')
        .setDescription("I'll actually respond to what you tell me. I don't remember stuff you tell me previously. <600 CHARS")
        .addStringOption(option=>
            option.setName('message')
            .setDescription('message to me')
            .setRequired(true)
        ) ,
    async execute(interaction) {
        interaction.deferReply();
        const input=interaction.options.getString("message")

        const togem=`BACKGROUND INFO: ${background}
        INSTRUCTION: ${instruction}
        USER MESSAGE: ${input}`
        await interaction.channel.sendTyping();
        const dn=Date.now();
        if (input.length>600) {
            await interaction.editReply("Your message was too long. Shorten it.")
        } else {
            try {
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
       
        await interaction.editReply(fullresp);
            } catch {
                await interaction.editReply("I couldn't respond to that because my brain failed somehow. Try again or ask something else.");
            }
            
        }
        
        
    }
};
