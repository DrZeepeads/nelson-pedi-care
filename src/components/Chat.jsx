import { useState } from "react";
import { getAIResponse } from "../api/gemini";

export default function Chat() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const sendMessage = async () => {
    if (!input.trim()) return;
    
    const userMessage = { role: "user", content: input };
    setMessages([...messages, userMessage]);

    const aiResponse = await getAIResponse(input);
    const botMessage = { role: "assistant", content: aiResponse };

    setMessages([...messages, userMessage, botMessage]);
    setInput("");
  };

  return (
    <div className="p-4 h-screen flex flex-col">
      <div className="flex-1 overflow-y-auto">
        {messages.map((msg, index) => (
          <div key={index} className={`mb-2 ${msg.role === "user" ? "text-right" : "text-left"}`}>
            <span className={`px-4 py-2 rounded ${msg.role === "user" ? "bg-blue-500 text-white" : "bg-gray-200"}`}>
              {msg.content}
            </span>
          </div>
        ))}
      </div>
      <div className="flex items-center gap-2">
        <input
          className="flex-1 border p-2"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type your message..."
        />
        <button className="bg-blue-500 text-white p-2" onClick={sendMessage}>Send</button>
      </div>
    </div>
  );
}
