import { useState } from "react";
import { askChatbot } from "../utils/api";

const Chatbot = () => {
  const [message, setMessage] = useState("");
  const [response, setResponse] = useState("");

  const sendMessage = async () => {
    if (!message) return;
    const reply = await askChatbot(message);
    setResponse(reply);
  };

  return (
    <div>
      <h2>Financial Chatbot</h2>
      <input 
        type="text" 
        value={message} 
        onChange={(e) => setMessage(e.target.value)} 
        placeholder="Ask a financial question..."
      />
      <button onClick={sendMessage}>Send</button>
      <p>Response: {response}</p>
    </div>
  );
};

export default Chatbot;
