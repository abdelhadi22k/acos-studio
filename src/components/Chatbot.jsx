import { useEffect, useRef, useState } from "react";

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false); // ✅ حالة الكتابة
  const chatEndRef = useRef(null);

  useEffect(() => {
    const saved = localStorage.getItem("chatbot_messages");
    if (saved) {
      const data = JSON.parse(saved);
      const now = new Date().getTime();
      if (now - data.timestamp < 15 * 24 * 60 * 60 * 1000) {
        setMessages(data.messages);
      } else {
        localStorage.removeItem("chatbot_messages");
      }
    } else {
      setMessages([
        {
          sender: "bot",
          text: "👋 Hi there! I'm Acos Assistant. How can I help you today?",
        },
      ]);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(
      "chatbot_messages",
      JSON.stringify({ messages, timestamp: new Date().getTime() })
    );
  }, [messages]);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]); // ✅ تمرير حتى عند ظهور typing

  const sendMessage = async () => {
    if (!input.trim()) return;
    const userMessage = { sender: "user", text: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");

    setIsTyping(true); // ✅ بدأ التأثير

    try {
      const res = await fetch("https://n8n-service-mwec.onrender.com/webhook/acos-nav-assistant", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: input }),
      });
      const data = await res.json();

      // ✅ تأخير بسيط لواقعية الكتابة
      setTimeout(() => {
        setIsTyping(false);
        const botMessage = {
          sender: "bot",
          text: data.reply || "Got it! I'll get back to you shortly",
        };
        setMessages((prev) => [...prev, botMessage]);
      }, 1200);
    } catch {
      setIsTyping(false);
      setMessages((prev) => [
        ...prev,
        { sender: "bot", text: "⚠️ Connection error. Please try again later." },
      ]);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  const clearChat = () => {
    localStorage.removeItem("chatbot_messages");
    setMessages([
      {
        sender: "bot",
        text: "Chat history cleared. How can I assist you now?",
      },
    ]);
  };

  return (
    <div className="chatbot-container">
      {!isOpen && (
        <button className="chatbot-toggle" onClick={() => setIsOpen(true)}>
          <lord-icon
            src="https://cdn.lordicon.com/uyxrgiem.json"
            trigger="hover"
            colors="primary:#eeeeee,secondary:#eeeeee"
            style={{ width: "24px", height: "24px" }}
          ></lord-icon>
          Chat with us
        </button>
      )}

      {isOpen && (
        <div className="chatbot-box">
          <div className="chatbot-header">
            <span>Hi I'm Navi, Acos Assistant</span>
            <div className="chatbot-actions">
              <button onClick={clearChat} title="Clear chat">
                <lord-icon
                  src="https://cdn.lordicon.com/jzinekkv.json"
                  trigger="hover"
                  colors="primary:#eeeeee,secondary:#eeeeee"
                  style={{ width: "20px", height: "20px" }}
                ></lord-icon>
              </button>
              <button onClick={() => setIsOpen(false)} title="Close">✖</button>
            </div>
          </div>

          <div className="chatbot-body">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`chatbot-message ${
                  msg.sender === "user" ? "user" : "bot"
                }`}
              >
                {msg.text}
              </div>
            ))}

            {/* ✅ تأثير الكتابة */}
            {isTyping && (
              <div className="chatbot-message bot typing">
                <div className="typing-dots">
               Typing
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>
            )}

            <div ref={chatEndRef} />
          </div>

          <div className="chatbot-input">
            <textarea
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Type your message..."
              rows={1}
            />
            <button onClick={sendMessage} className="send-button">
              <lord-icon
                src="https://cdn.lordicon.com/vpbspaec.json"
                trigger="hover"
                colors="primary:#eeeeee,secondary:#eeeeee"
                style={{ width: "20px", height: "20px" }}
              ></lord-icon>
              Send
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Chatbot;
