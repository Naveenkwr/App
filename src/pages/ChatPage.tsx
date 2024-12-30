import React, { useState, useRef, useEffect } from 'react';
import { Bot } from 'lucide-react';
import ChatMessage from '../components/ChatMessage';
import ChatInput from '../components/ChatInput';
import { useChat } from '../hooks/useChat';

const ChatPage = () => {
  const { messages, isLoading, sendMessage } = useChat();
  const [input, setInput] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;
    
    await sendMessage(input);
    setInput('');
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="bg-gray-900 rounded-lg shadow-xl min-h-[600px] flex flex-col">
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {messages.map((message, index) => (
            <ChatMessage key={index} {...message} />
          ))}
          {isLoading && (
            <div className="flex items-center space-x-2 text-gray-400">
              <Bot className="h-6 w-6 animate-pulse" />
              <span>Thinking...</span>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>
        
        <ChatInput
          input={input}
          isLoading={isLoading}
          onInputChange={setInput}
          onSubmit={handleSubmit}
        />
      </div>
    </div>
  );
};

export default ChatPage;