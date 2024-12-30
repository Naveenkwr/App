import React from 'react';
import { Send } from 'lucide-react';

interface ChatInputProps {
  input: string;
  isLoading: boolean;
  onInputChange: (value: string) => void;
  onSubmit: (e: React.FormEvent) => void;
}

const ChatInput: React.FC<ChatInputProps> = ({ input, isLoading, onInputChange, onSubmit }) => {
  return (
    <form onSubmit={onSubmit} className="p-4 border-t border-gray-800">
      <div className="flex space-x-4">
        <input
          type="text"
          value={input}
          onChange={(e) => onInputChange(e.target.value)}
          placeholder="Type your message..."
          className="flex-1 bg-gray-800 text-white rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          disabled={isLoading}
        />
        <button
          type="submit"
          disabled={isLoading}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-50"
        >
          <Send className="h-5 w-5" />
        </button>
      </div>
    </form>
  );
};

export default ChatInput;