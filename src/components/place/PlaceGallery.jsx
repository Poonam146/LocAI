import React, { useState } from 'react';
import { cn } from '../../utils/cn';

export const PlaceGallery = ({ images = [], mainImage, name }) => {
  const allImages = images && images.length > 0 ? images : [mainImage];
  const [selectedImage, setSelectedImage] = useState(allImages[0] || mainImage);

  return (
    <div className="space-y-3">
      {/* Main Image Container */}
      <div className="relative aspect-16/9 sm:aspect-21/9 w-full rounded-2xl overflow-hidden bg-slate-900 shadow-md">
        <img
          src={selectedImage}
          alt={name}
          className="w-full h-full object-cover transition-all duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-black/10" />
      </div>

      {/* Thumbnail Bar */}
      {allImages.length > 1 && (
        <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none snap-x">
          {allImages.map((img, idx) => (
            <button
              key={idx}
              onClick={() => setSelectedImage(img)}
              className={cn(
                'relative w-20 h-14 sm:w-24 sm:h-16 rounded-xl overflow-hidden shrink-0 border-2 transition-all cursor-pointer snap-start',
                selectedImage === img
                  ? 'border-indigo-600 ring-2 ring-indigo-500/30 scale-105'
                  : 'border-slate-200/80 opacity-70 hover:opacity-100 hover:border-slate-300'
              )}
            >
              <img src={img} alt={`${name} thumb ${idx + 1}`} className="w-full h-full object-cover" />
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default PlaceGallery;
