"use client";

import { ArrowLeft, MapPin, ExternalLink } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import type { Region, Category, Subcategory, Place } from "@/lib/types";

interface PlacesClientProps {
  region: Region;
  category: Category;
  subcategory: Subcategory;
  places: Place[];
}

export default function PlacesClient({
  region,
  category,
  subcategory,
  places,
}: PlacesClientProps) {
  const openGoogleMaps = (mapLink: string) => {
    window.open(mapLink, "_blank");
  };

  const openExternalBooking = (url: string) => {
    window.open(url, "_blank");
  };

  return (
    <main className="min-h-screen bg-[#001B44] px-4 py-4 sm:py-8">
      <div className="mx-auto max-w-7xl">
        <Link
          href={`/regions/${region.id}/${category.id}`}
          className="mb-4 sm:mb-6 inline-flex items-center gap-2 text-sm text-white/80 hover:text-white"
        >
          <ArrowLeft className="h-4 w-4" />
          Back
        </Link>

        <h1 className="mb-2 sm:mb-3 text-center text-3xl sm:text-4xl font-bold text-white">
          {subcategory.name} in {region.name}
        </h1>
        <p className="mb-6 sm:mb-8 text-center text-base sm:text-lg text-gray-300">
          Choose a destination to explore activities
        </p>

        <div className="grid gap-2 sm:gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {places.map((place) => (
            <PlaceCard
              key={place.id}
              place={place}
              region={region}
              category={category}
              subcategory={subcategory}
              onMapClick={openGoogleMaps}
              onExternalBookingClick={openExternalBooking}
            />
          ))}
        </div>
      </div>
    </main>
  );
}

interface PlaceCardProps {
  place: Place;
  region: Region;
  category: Category;
  subcategory: Subcategory;
  onMapClick: (mapLink: string) => void;
  onExternalBookingClick: (url: string) => void;
}

function PlaceCard({
  place,
  region,
  category,
  subcategory,
  onMapClick,
  onExternalBookingClick,
}: PlaceCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="group flex flex-col overflow-hidden rounded-lg bg-white shadow-lg transition hover:shadow-xl">
      <div className="relative h-40 sm:h-48">
        <img
          src={place.image}
          alt={place.name}
          className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
        />
        {/* 黒オーバーレイ不要なら削除 */}
      </div>

      {/* カード内部のパディングをやや小さく */}
      <div className="flex flex-1 flex-col p-2 sm:p-3">
        <div className="flex-1">
          <h2 className="mb-1 sm:mb-2 text-lg sm:text-xl font-semibold text-gray-900 line-clamp-2">
            {place.name}
          </h2>

          <div className="relative">
            <p
              className={`text-xs sm:text-sm text-gray-600 ${
                isExpanded ? "" : "line-clamp-3"
              }`}
            >
              {place.description}
            </p>
            {place.description.length > 150 && (
              <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="mt-1 text-xs font-medium text-blue-600 hover:text-blue-700"
              >
                {isExpanded ? "Show less" : "Read more"}
              </button>
            )}
          </div>
        </div>

        <div className="mt-2 sm:mt-3 flex gap-2 sm:gap-3">
          <button
            onClick={() => onMapClick(place.mapLink)}
            className="flex flex-1 items-center justify-center gap-1.5 sm:gap-2 
                       rounded-full bg-blue-600 
                       px-3 sm:px-4 py-2 sm:py-2.5 
                       text-sm font-medium text-white transition hover:bg-blue-700"
          >
            <MapPin className="h-4 w-4" />
            View Map
          </button>

          {place.externalBookingUrl ? (
            <button
              onClick={() => onExternalBookingClick(place.externalBookingUrl!)}
              className="flex flex-1 items-center justify-center gap-1.5 sm:gap-2 
                         rounded-full bg-green-600 
                         px-3 sm:px-4 py-2 sm:py-2.5 
                         text-sm font-medium text-white transition hover:bg-green-700"
            >
              <ExternalLink className="h-4 w-4" />
              Book Now
            </button>
          ) : (
            <Link
              href={`/regions/${region.id}/${category.id}/${subcategory.id}/places/${place.id}/activities`}
              className="flex flex-1 items-center justify-center gap-1.5 sm:gap-2 
                         rounded-full bg-green-600 
                         px-3 sm:px-4 py-2 sm:py-2.5 
                         text-sm font-medium text-white transition hover:bg-green-700"
            >
              View Activities
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
