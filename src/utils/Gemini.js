import { GoogleGenerativeAI } from "@google/generative-ai";
import { OPENAI_KEY } from "./constants";

// Access your API key (see "Set up your API key" above)
const genAI = new GoogleGenerativeAI(OPENAI_KEY);


export default genAI;