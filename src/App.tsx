// import React from 'react';
import { Toaster } from 'react-hot-toast';
import { TweetGenerator } from './components/TweetGenerator';
import { Twitter } from 'lucide-react';

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Twitter size={32} className="text-blue-500" />
            <h1 className="text-4xl font-bold text-gray-900">Persist Ventures</h1>
          </div>
          <p className="text-gray-600">Create engaging tweets with our AI-powered generator</p>
        </div>
        <TweetGenerator />
      </div>
      <Toaster position="bottom-right" />
    </div>
  );
}