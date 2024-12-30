import { Link } from 'react-router-dom';
import { Bot, Sparkles, Zap, Shield } from 'lucide-react';

const LandingPage = () => {
  return (
    <div className="min-h-[calc(100vh-64px)]">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <div className="flex justify-center">
            <Bot className="h-16 w-16 text-blue-500" />
          </div>
          <h1 className="mt-4 text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl">
            Experience the Power of
            <span className="block text-blue-500">Gemini AI Chat</span>
          </h1>
          <p className="mt-3 max-w-md mx-auto text-base text-gray-300 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
            Engage in intelligent conversations powered by Google's advanced Gemini AI. Experience the next generation of AI assistance.
          </p>
          <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
            <Link
              to="/chat"
              className="flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 md:py-4 md:text-lg md:px-10"
            >
              Start Chatting
            </Link>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-12 bg-gray-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="flex flex-col items-center p-6 bg-gray-900 rounded-lg">
              <Sparkles className="h-12 w-12 text-blue-500" />
              <h3 className="mt-4 text-xl font-medium text-white">Advanced AI</h3>
              <p className="mt-2 text-gray-300 text-center">
                Powered by Google's cutting-edge Gemini AI technology
              </p>
            </div>
            <div className="flex flex-col items-center p-6 bg-gray-900 rounded-lg">
              <Zap className="h-12 w-12 text-blue-500" />
              <h3 className="mt-4 text-xl font-medium text-white">Fast Responses</h3>
              <p className="mt-2 text-gray-300 text-center">
                Get instant, accurate responses to your queries
              </p>
            </div>
            <div className="flex flex-col items-center p-6 bg-gray-900 rounded-lg">
              <Shield className="h-12 w-12 text-blue-500" />
              <h3 className="mt-4 text-xl font-medium text-white">Secure & Private</h3>
              <p className="mt-2 text-gray-300 text-center">
                Your conversations are private and secure
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;