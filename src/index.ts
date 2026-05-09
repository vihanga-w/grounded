import OpenAI from "openai";

export const createOpenAIClient = () =>
  new OpenAI({ apiKey: process.env.OPENAI_API_KEY });
