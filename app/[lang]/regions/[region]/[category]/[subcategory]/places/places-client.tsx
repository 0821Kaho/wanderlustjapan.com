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
    if (!mapLink) return; // undefined の場合はクリックを無効化
    window.open(mapLink, "_blank");
  };

  const openExternalBooking = (url: string) => {
    if (!url) return; // undefined の場合はクリックを無効化
    window.open(url, "_blank");
  };

  return (
    <div>
      {/* “Back” link to region/category page */}
      <Link
        href={`/regions/${region.id}/${category.id}`}
        className="mb-4 inline-flex items-center gap-2 text-sm text-white/80 hover:text-white"
      >
        <ArrowLeft className="h-4 w-4" />
        Back
      </Link>

      <div className="grid gap-6 sm:gap-8 sm:grid-cols-2 lg:grid-cols-3">
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
      </div>

      <div className="flex flex-1 flex-col p-3 sm:p-4 text-gray-900">
        <div className="flex-1">
          <h2 className="mb-1 sm:mb-2 text-base sm:text-lg font-semibold line-clamp-2">
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
            onClick={() => onMapClick(place.mapLink ?? "#")} // undefined の場合は "#" を指定
            className="flex flex-1 items-center justify-center gap-1.5 sm:gap-2
                       rounded-full bg-blue-600
                       px-3 sm:px-4 py-2 sm:py-2.5
                       text-sm font-medium text-white
                       transition hover:bg-blue-700"
          >
            <MapPin className="h-4 w-4" />
            View Map
          </button>

          {place.externalBookingUrl ? (
            <button
              onClick={() => onExternalBookingClick(place.externalBookingUrl ?? "#")} // undefined の場合は "#" を指定
              className="flex flex-1 items-center justify-center gap-1.5 sm:gap-2
                         rounded-full bg-green-600
                         px-3 sm:px-4 py-2 sm:py-2.5
                         text-sm font-medium text-white
                         transition hover:bg-green-700"
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
                         text-sm font-medium text-white
                         transition hover:bg-green-700
                         text-center"
            >
              View Activities
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
