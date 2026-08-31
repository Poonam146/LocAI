import React, { useState } from 'react';
import { Star, X } from 'lucide-react';
import Modal from '../ui/Modal';
import Button from '../ui/Button';
import { MOCK_USER } from '../../data/mockData';

export const ReviewForm = ({ isOpen, onClose, onSubmitReview }) => {
  const [rating, setRating] = useState(5);
  const [hoverRating, setHoverRating] = useState(0);
  const [reviewText, setReviewText] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!reviewText.trim()) {
      setError('Please write a short review before submitting.');
      return;
    }

    const newReview = {
      id: Date.now(),
      name: MOCK_USER.name,
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80',
      rating,
      date: 'Just now',
      text: reviewText.trim(),
      helpfulCount: 0,
    };

    onSubmitReview(newReview);
    setReviewText('');
    setError('');
    onClose();
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title="Write a Review"
      description="Share your experience to help the LocAI community."
      footer={
        <>
          <Button variant="ghost" size="sm" onClick={onClose}>
            Cancel
          </Button>
          <Button variant="primary" size="sm" onClick={handleSubmit}>
            Submit Review
          </Button>
        </>
      }
    >
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Star Rating Picker */}
        <div className="space-y-1.5 text-center">
          <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider">
            Your Rating
          </label>
          <div className="flex items-center justify-center gap-1">
            {[1, 2, 3, 4, 5].map((star) => (
              <button
                key={star}
                type="button"
                onClick={() => setRating(star)}
                onMouseEnter={() => setHoverRating(star)}
                onMouseLeave={() => setHoverRating(0)}
                className="p-1 cursor-pointer transition-transform hover:scale-110 focus:outline-none"
              >
                <Star
                  className={`w-7 h-7 ${
                    star <= (hoverRating || rating)
                      ? 'fill-amber-400 text-amber-400'
                      : 'fill-slate-200 text-slate-200'
                  }`}
                />
              </button>
            ))}
          </div>
        </div>

        {/* Text Area */}
        <div className="space-y-1.5">
          <label htmlFor="review-experience" className="block text-xs font-semibold text-slate-700 uppercase tracking-wider">
            Your Review
          </label>
          <textarea
            id="review-experience"
            rows={4}
            value={reviewText}
            onChange={(e) => {
              setReviewText(e.target.value);
              if (error) setError('');
            }}
            placeholder="Share your experience (e.g. ambience, food quality, service)..."
            className="w-full bg-white border border-slate-200 rounded-xl p-3 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500"
          />
          {error && <p className="text-xs text-rose-600 font-medium">{error}</p>}
        </div>
      </form>
    </Modal>
  );
};

export default ReviewForm;
