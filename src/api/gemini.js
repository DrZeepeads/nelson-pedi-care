import axios from 'axios';

const GEMINI_API_KEY = "AIzaSyC9t6Mthi2scFPFb7juMgX1GgcrPXJv2zk";

export const getAIResponse = async (query) => {
  try {
    const response = await axios.post(
      "https://api.openai.com/v1/chat/completions",
      {
        model: "gemini-1",
        messages: [{ role: "system", content: query }],
      },
      {
        headers: {
          Authorization: `Bearer ${GEMINI_API_KEY}`,
          "Content-Type": "application/json",
        },
      }
    );
    return response.data.choices[0].message.content;
  } catch (error) {
    console.error("Error fetching AI response:", error);
    return "An error occurred.";
  }
};
