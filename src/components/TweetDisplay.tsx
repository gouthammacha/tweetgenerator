// import React from 'react';
import { Clock } from 'lucide-react';
import type { Tweet } from '../types';

interface TweetDisplayProps {
  tweet: Tweet | null;
}

export function TweetDisplay({ tweet }: TweetDisplayProps) {
  if (!tweet) return null;

  return (
    <div className="w-full max-w-lg p-6 bg-white rounded-lg shadow-md">
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <p className="text-gray-800 text-lg">{tweet.content}</p>
          <div className="flex items-center gap-2 mt-4 text-sm text-gray-500">
            <Clock size={16} />
            <time dateTime={tweet.timestamp.toISOString()}>
              {tweet.timestamp.toLocaleTimeString()}
            </time>
            {tweet.generated && (
              <span className="ml-2 px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-xs">
                AI Generated
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}