import React, { useState, useMemo } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { ArrowLeft, Heart, Share2, Sparkles, MapPin, ChevronDown, ChevronUp, MessageSquarePlus } from 'lucide-react';
import { PLACES } from '../data/places';
import Toast from '../components/ui/Toast';
import Button from '../components/ui/Button';
import PlaceCard from '../components/common/PlaceCard';

import PlaceGallery from '../components/place/PlaceGallery';
import PlaceHeader from '../components/place/PlaceHeader';
import PlaceActions from '../components/place/PlaceActions';
import AIRecommendation from '../components/place/AIRecommendation';
import PlaceHighlights from '../components/place/PlaceHighlights';
import OpeningHours from '../components/place/OpeningHours';
import PlaceLocation from '../components/place/PlaceLocation';
import RatingBreakdown from '../components/place/RatingBreakdown';
import ReviewSummary from '../components/place/ReviewSummary';
import ReviewCard from '../components/place/ReviewCard';
import ReviewFilters from '../components/place/ReviewFilters';
import ReviewForm from '../components/place/ReviewForm';

export const PlaceDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const placeId = parseInt(id, 10);
  const place = useMemo(() => PLACES.find((p) => p.id === placeId), [placeId]);

  const [isSaved, setIsSaved] = useState(false);
  const [isAboutExpanded, setIsAboutExpanded] = useState(false);
  const [activeStarFilter, setActiveStarFilter] = useState('all');
  const [isReviewModalOpen, setIsReviewModalOpen] = useState(false);
  const [reviewsList, setReviewsList] = useState(place?.reviews || []);

  const [toastState, setToastState] = useState({ isVisible: false, message: '', type: 'info' });

  const showToast = (message, type = 'info') => {
    setToastState({ isVisible: true, message, type });
  };

  // If place does not exist in dataset -> Render 404 Not Found Card
  if (!place) {
    return (
      <div className="max-w-xl mx-auto py-16 text-center space-y-6">
        <div className="w-16 h-16 rounded-full bg-slate-100 flex items-center justify-center mx-auto text-slate-400">
          <MapPin className="w-8 h-8" />
        </div>
        <div className="space-y-2">
          <h1 className="text-2xl font-extrabold text-slate-900">Place not found</h1>
          <p className="text-sm text-slate-500 max-w-md mx-auto">
            The place you're looking for doesn't exist or may have been removed from the portal.
          </p>
        </div>
        <div className="flex items-center justify-center gap-3 pt-2">
          <Button variant="outline" size="md" onClick={() => navigate('/explore')}>
            Back to Explore
          </Button>
          <Button variant="primary" size="md" onClick={() => navigate('/')}>
            Go Home
          </Button>
        </div>
      </div>
    );
  }

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: place.name,
          text: `Check out ${place.name} on LocAI — Your AI Local Guide!`,
          url: window.location.href,
        });
      } catch (err) {
        // Fallback to clipboard
        navigator.clipboard?.writeText(window.location.href);
        showToast('Link copied to clipboard!');
      }
    } else {
      navigator.clipboard?.writeText(window.location.href);
      showToast('Link copied to clipboard!');
    }
  };

  const handleAddReview = (newReview) => {
    setReviewsList((prev) => [newReview, ...prev]);
    showToast('Thanks for sharing your experience!', 'success');
  };

  // Filter reviews
  const filteredReviews = reviewsList.filter((r) => {
    if (activeStarFilter === 'all') return true;
    return r.rating === activeStarFilter;
  });

  // Nearby places (excluding current)
  const nearbyPlaces = PLACES.filter((p) => p.id !== place.id).slice(0, 3);

  return (
    <div className="space-y-8 py-2 max-w-5xl mx-auto">
      <Toast
        isVisible={toastState.isVisible}
        message={toastState.message}
        type={toastState.type}
        onClose={() => setToastState((prev) => ({ ...prev, isVisible: false }))}
      />

      {/* Top Navigation & Action Header */}
      <div className="flex items-center justify-between border-b border-slate-200/80 pb-4">
        <Link
          to="/explore"
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-600 hover:text-indigo-600 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Explore</span>
        </Link>

        <div className="flex items-center gap-2">
          <button
            onClick={() => {
              setIsSaved(!isSaved);
              showToast(isSaved ? 'Removed from saved' : 'Saved to your collection!');
            }}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold border transition-colors cursor-pointer ${
              isSaved
                ? 'bg-rose-50 text-rose-600 border-rose-200'
                : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-50'
            }`}
          >
            <Heart className={`w-3.5 h-3.5 ${isSaved ? 'fill-rose-500 text-rose-500' : ''}`} />
            <span>{isSaved ? 'Saved' : 'Save'}</span>
          </button>

          <button
            onClick={handleShare}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold bg-white text-slate-700 border border-slate-200 hover:bg-slate-50 transition-colors cursor-pointer"
          >
            <Share2 className="w-3.5 h-3.5" />
            <span>Share</span>
          </button>
        </div>
      </div>

      {/* 1. Image Gallery */}
      <PlaceGallery images={place.images} mainImage={place.image} name={place.name} />

      {/* 2. Place Basic Header Info */}
      <PlaceHeader place={place} />

      {/* 3. Action Buttons (Directions, Call, Website, Save) */}
      <PlaceActions place={place} onToast={showToast} />

      {/* 4. AI Recommendation Card */}
      <AIRecommendation place={place} />

      {/* 5. About & Highlights */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
        <div className="md:col-span-7 space-y-6">
          {/* About Section */}
          <div className="space-y-2 bg-white border border-slate-200/80 rounded-2xl p-5 shadow-xs">
            <h3 className="text-sm font-bold text-slate-900 tracking-tight">
              About this place
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              {isAboutExpanded
                ? place.description
                : `${place.description.slice(0, 160)}...`}
            </p>
            {place.description.length > 160 && (
              <button
                onClick={() => setIsAboutExpanded(!isAboutExpanded)}
                className="inline-flex items-center gap-1 text-xs font-bold text-indigo-600 hover:text-indigo-700 transition-colors pt-1 cursor-pointer"
              >
                <span>{isAboutExpanded ? 'Show less' : 'Read more'}</span>
                {isAboutExpanded ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
              </button>
            )}
          </div>

          {/* Highlights Section */}
          <PlaceHighlights highlights={place.highlights} />
        </div>

        <div className="md:col-span-5 space-y-6">
          {/* Opening Hours */}
          <OpeningHours openingHours={place.openingHours} openStatus={place.openStatus} />

          {/* Location & Mock Map */}
          <PlaceLocation place={place} onToast={showToast} />
        </div>
      </div>

      {/* 6. Reviews & Rating Section */}
      <div className="space-y-6 pt-4 border-t border-slate-200/80">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div>
            <h2 className="text-xl font-extrabold text-slate-900 tracking-tight">
              Community Reviews & Ratings
            </h2>
            <p className="text-xs text-slate-500 mt-0.5">
              Real visitor feedback and AI sentiment highlights.
            </p>
          </div>

          <Button
            variant="primary"
            size="sm"
            leftIcon={MessageSquarePlus}
            onClick={() => setIsReviewModalOpen(true)}
            className="bg-indigo-600 hover:bg-indigo-700 self-start sm:self-auto font-semibold"
          >
            Write a Review
          </Button>
        </div>

        {/* Rating Breakdown & AI Review Summary */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          <div className="md:col-span-5">
            <RatingBreakdown rating={place.rating} reviewCount={place.reviewCount} />
          </div>
          <div className="md:col-span-7">
            <ReviewSummary reviewSummary={place.reviewSummary} />
          </div>
        </div>

        {/* Review Filters & List */}
        <div className="space-y-4 pt-2">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <ReviewFilters activeFilter={activeStarFilter} onFilterChange={setActiveStarFilter} />
            <span className="text-xs text-slate-500 font-medium">
              Showing {filteredReviews.length} reviews
            </span>
          </div>

          <div className="space-y-3">
            {filteredReviews.map((rev) => (
              <ReviewCard key={rev.id} review={rev} onToast={showToast} />
            ))}
          </div>
        </div>
      </div>

      {/* 7. Nearby Places Recommendations */}
      <div className="space-y-4 pt-6 border-t border-slate-200/80">
        <div>
          <h2 className="text-lg font-bold text-slate-900 tracking-tight">
            Nearby Places
          </h2>
          <p className="text-xs text-slate-500">
            Explore more top rated spots around {place.location}.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {nearbyPlaces.map((nearPlace) => (
            <PlaceCard key={nearPlace.id} place={nearPlace} />
          ))}
        </div>
      </div>

      {/* Write Review Modal Dialog */}
      <ReviewForm
        isOpen={isReviewModalOpen}
        onClose={() => setIsReviewModalOpen(false)}
        onSubmitReview={handleAddReview}
      />
    </div>
  );
};

export default PlaceDetails;
