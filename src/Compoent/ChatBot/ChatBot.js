// src/components/ChatBot.js

import React, { useState, useRef, useEffect } from 'react';
import './ChatBot.css';

const API_KEY = 'YOUR_OPENAI_API_KEY_HERE'; // Replace with your OpenAI API key

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { type: 'incoming', content: 'Hi there. How can I help you today?' },
  ]);
  const [input, setInput] = useState('');
  const chatBoxRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    if (chatBoxRef.current) {
      chatBoxRef.current.scrollTop = chatBoxRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSendMessage = () => {
    if (input.trim() === '') return;
    const newMessage = { type: 'outgoing', content: input.trim() };
    setMessages([...messages, newMessage]);
    setInput('');
    fetchResponse(newMessage.content);
  };

  const fetchResponse = async (userMessage) => {
    const API_URL = 'https://api.openai.com/v1/chat/completions';
    const requestOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${API_KEY}`,
      },
      body: JSON.stringify({
        model: 'gpt-3.5-turbo',
        messages: [{ role: 'user', content: userMessage }],
      }),
    };
    try {
      const res = await fetch(API_URL, requestOptions);
      const data = await res.json();
      const aiMessage = data.choices[0].message.content;
      setMessages((prevMessages) => [
        ...prevMessages,
        { type: 'incoming', content: aiMessage },
      ]);
    } catch (error) {
      console.error('Error fetching AI response:', error);
      setMessages((prevMessages) => [
        ...prevMessages,
        { type: 'incoming', content: 'Oops! Please try again!', error: true },
      ]);
    }
  };

  const handleInputChange = (e) => {
    setInput(e.target.value);
    if (inputRef.current) {
      inputRef.current.style.height = 'auto';
      inputRef.current.style.height = `${e.target.scrollHeight}px`;
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <div>
      <button
        className="chatbot__button"
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <span className="material-symbols-outlined">💌</span>
        <span className="material-symbols-outlined">close</span>
      </button>
      <div className={`chatbot ${isOpen ? 'chatbot--open' : ''}`}>
        <div className="chatbot__header">
          <h3 className="chatbox__title">Chatbot</h3>
          <span
            className="material-symbols-outlined"
            onClick={() => setIsOpen(false)}
          >
            close
          </span>
        </div>
        <ul className="chatbot__box" ref={chatBoxRef}>
          {messages.map((msg, index) => (
            <li
              key={index}
              className={`chatbot__chat ${msg.type} ${
                msg.error ? 'error' : ''
              }`}
            >
              {msg.type === 'incoming' && (
                <span className="material-symbols-outlined">smart_toy</span>
              )}
              <p>{msg.content}</p>
            </li>
          ))}
        </ul>
        <div className="chatbot__input-box">
          <textarea
            ref={inputRef}
            className="chatbot__textarea"
            placeholder="Enter a message..."
            value={input}
            onChange={handleInputChange}
            onKeyPress={handleKeyPress}
            required
          ></textarea>
          <span
            id="send-btn"
            className="material-symbols-outlined"
            onClick={handleSendMessage}
          >
            send
          </span>
        </div>
      </div>
    </div>
  );
};

export default ChatBot;
