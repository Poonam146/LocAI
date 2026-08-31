import React, { useState } from 'react';
import { Star, ThumbsUp } from 'lucide-react';
import Avatar from '../ui/Avatar';

export const ReviewCard = ({ review, onToast }) => {
  const [helpfulCount, setHelpfulCount] = useState(review.helpfulCount || 0);
  const [hasLiked, setHasLiked] = useState(false);

  const handleHelpful = () => {
    if (hasLiked) {
      setHelpfulCount(helpfulCount - 1);
      setHasLiked(false);
    } else {
      setHelpfulCount(helpfulCount + 1);
      setHasLiked(true);
      onToast?.('Marked as helpful!');
    }
  };

  return (
    <div className="bg-white border border-slate-200/80 rounded-2xl p-4 space-y-2.5 shadow-xs">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Avatar src={review.avatar} name={review.name} size="sm" />
          <div>
            <h4 className="text-xs font-bold text-slate-900">{review.name}</h4>
            <span className="text-[10px] text-slate-400">{review.date}</span>
          </div>
        </div>

        <div className="flex items-center gap-0.5 bg-amber-50 px-2 py-0.5 rounded-md text-xs font-bold text-amber-800 border border-amber-200/60">
          <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
          <span>{review.rating}</span>
        </div>
      </div>

      <p className="text-xs text-slate-600 leading-relaxed font-normal">
        "{review.text}"
      </p>

      <div className="pt-1 flex items-center justify-end">
        <button
          onClick={handleHelpful}
          className={`flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-medium transition-colors cursor-pointer ${
            hasLiked
              ? 'bg-indigo-50 text-indigo-700 font-semibold'
              : 'text-slate-500 hover:bg-slate-100 hover:text-slate-700'
          }`}
        >
          <ThumbsUp className={`w-3.5 h-3.5 ${hasLiked ? 'text-indigo-600 fill-indigo-600/20' : ''}`} />
          <span>Helpful ({helpfulCount})</span>
        </button>
      </div>
    </div>
  );
};

export default ReviewCard;
