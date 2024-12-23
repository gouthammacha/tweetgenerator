import { useState } from 'react';
import { TweetForm } from './TweetForm';
import { TweetDisplay } from './TweetDisplay';
import type { Tweet, TweetFormData } from '../types';

export function TweetGenerator() {
  const [isLoading, setIsLoading] = useState(false);
  const [currentTweet, setCurrentTweet] = useState<Tweet | null>(null);

  const handleSubmit = (data: TweetFormData) => {
    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      setCurrentTweet({
        content: `Sample tweet based on: ${data.content}`,
        generated: true,
        timestamp: new Date(),
      });
      setIsLoading(false);
    }, 1000);
  };

  return (
    <div className="flex flex-col items-center gap-8">
      <TweetForm onSubmit={handleSubmit} isLoading={isLoading} />
      <TweetDisplay tweet={currentTweet} />
    </div>
  );
}