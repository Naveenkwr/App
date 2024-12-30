import { Bot, User } from 'lucide-react';
import ReactMarkdown from 'react-markdown';

interface ChatMessageProps {
  role: 'user' | 'assistant';
  content: string;
}

const ChatMessage: React.FC<ChatMessageProps> = ({ role, content }) => {
  return (
    <div className={`flex items-start space-x-3 ${
      role === 'assistant' ? 'bg-gray-800' : 'bg-gray-900'
    } p-4 rounded-lg`}>
      {role === 'assistant' ? (
        <Bot className="h-6 w-6 text-blue-500" />
      ) : (
        <User className="h-6 w-6 text-green-500" />
      )}
      <div className="flex-1">
        <ReactMarkdown 
          className={`prose ${
            role === 'assistant' ? 'text-gray-200' : 'text-white'
          } max-w-none prose-invert`}
        >
          {content}
        </ReactMarkdown>
      </div>
    </div>
  );
};

export default ChatMessage;