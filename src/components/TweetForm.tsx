import React, { useState } from 'react';
import { Send } from 'lucide-react';
import type { TweetFormData } from '../types';
import axios from 'axios';


interface TweetFormProps {
  onSubmit: (data: TweetFormData) => void;
  isLoading: boolean;
}

export function TweetForm({ onSubmit, isLoading }: TweetFormProps) {
  const [content, setContent] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!content.trim()) return;
    onSubmit({ content });
    setContent('');
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-lg">
      <div className="mb-4">
        <textarea
          className="w-full p-4 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none h-32"
          placeholder="What's on your mind?"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          disabled={isLoading}
        />
      </div>
      <button
        type="submit"
        disabled={isLoading || !content.trim()}
        className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
      >
        {isLoading ? 'Generating...' : 'Generate Tweet'}
        <Send size={20} />
      </button>
    </form>
  );
}