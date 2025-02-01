"use client";

import { useState } from 'react';
import { Search, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { PLACES_DATA } from '@/lib/data/places';
import { ACTIVITIES_DATA } from '@/lib/data/activities';
import Link from 'next/link';

type SearchResult = {
  type: 'place' | 'activity';
  id: string;
  name: string;
  description: string;
  image: string;
  url: string;
  price?: {
    amount: number;
    currency: string;
  };
  duration?: string;
};

export default function SearchButton() {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const getSearchResults = () => {
    if (!searchQuery.trim()) return [];

    const query = searchQuery.toLowerCase();
    const results: SearchResult[] = [];

    // Search places
    PLACES_DATA.forEach(place => {
      if (
        place.name.toLowerCase().includes(query) ||
        place.description.toLowerCase().includes(query)
      ) {
        results.push({
          type: 'place',
          id: place.id,
          name: place.name,
          description: place.description,
          image: place.image,
          url: `/regions/${place.region}/${place.category}/${place.subCategory}/places/${place.id}`
        });
      }
    });

    // Search activities
    Object.entries(ACTIVITIES_DATA).forEach(([placeId, activities]) => {
      activities.forEach(activity => {
        if (
          activity.name.toLowerCase().includes(query) ||
          activity.description.toLowerCase().includes(query)
        ) {
          const place = PLACES_DATA.find(p => p.id === placeId);
          if (place) {
            results.push({
              type: 'activity',
              id: activity.id,
              name: activity.name,
              description: activity.description,
              image: activity.image,
              price: activity.price,
              duration: activity.duration,
              url: `/regions/${place.region}/${place.category}/${place.subCategory}/places/${place.id}/activities`
            });
          }
        }
      });
    });

    return results.slice(0, 5); // Limit to 5 results
  };

  const searchResults = getSearchResults();

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-1.5 sm:gap-2 rounded-full 
          bg-white/10 hover:bg-white/20
          backdrop-blur-md
          border border-white/20
          px-3 sm:px-4 py-2 sm:py-2.5 
          text-sm sm:text-base font-medium text-white 
          shadow-lg hover:shadow-xl 
          whitespace-nowrap
          transition-all duration-200"
      >
        <Search className="h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0" />
        <span className="hidden sm:inline">Search</span>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute left-0 top-full mt-2 w-screen max-w-md rounded-lg 
              bg-white/10 backdrop-blur-md border border-white/20 
              p-4 shadow-xl z-50"
          >
            <div className="relative mb-4">
              <input
                type="text"
                placeholder="Search places, activities..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full rounded-lg bg-white/20 
                  border border-white/30 
                  px-4 py-2 
                  text-white placeholder-white/60
                  focus:outline-none focus:ring-2 focus:ring-white/30"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-white/60 hover:text-white"
                >
                  <X className="h-4 w-4" />
                </button>
              )}
            </div>

            {searchResults.length > 0 ? (
              <div className="space-y-3">
                {searchResults.map((result) => (
                  <Link
                    key={`${result.type}-${result.id}`}
                    href={result.url}
                    onClick={() => setIsOpen(false)}
                    className="flex items-start gap-3 rounded-lg p-2 
                      transition-colors duration-200
                      hover:bg-white/10"
                  >
                    <img
                      src={result.image}
                      alt={result.name}
                      className="h-16 w-16 rounded-lg object-cover flex-shrink-0"
                    />
                    <div className="flex-1 min-w-0">
                      <h3 className="text-sm font-semibold text-white truncate">
                        {result.name}
                      </h3>
                      <p className="mt-1 text-xs text-white/80 line-clamp-2">
                        {result.description}
                      </p>
                      {result.type === 'activity' && result.price && result.duration && (
                        <div className="mt-1 flex items-center gap-2 text-xs text-white/60">
                          <span>¥{result.price.amount.toLocaleString()}</span>
                          <span>•</span>
                          <span>{result.duration}</span>
                        </div>
                      )}
                    </div>
                  </Link>
                ))}
              </div>
            ) : searchQuery ? (
              <p className="text-center text-sm text-white/60">
                No results found
              </p>
            ) : null}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}