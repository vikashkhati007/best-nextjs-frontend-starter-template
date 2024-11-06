import { openai } from '@ai-sdk/openai';
import { generateText } from 'ai';


export const handlegetChats = async (userpromptget : string) => {
const { text } = await generateText({
  model: openai('gpt-3.5-turbo'),
  prompt: userpromptget,
});
return text;
}