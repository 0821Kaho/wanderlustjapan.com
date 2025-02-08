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
    <div>
<<<<<<< HEAD
      {/* “Back” link to region/category page */}
      <Link
        href={`/regions/${region.id}/${category.id}`}
        className="mb-4 inline-flex items-center gap-2 text-sm text-white/80 hover:text-white"
      >
        <ArrowLeft className="h-4 w-4" />
        Back
      </Link>

      <div className="grid gap-6 sm:gap-8 sm:grid-cols-2 lg:grid-cols-3">
=======
      <div className="grid gap-3 sm:gap-4 sm:grid-cols-2 lg:grid-cols-3">
>>>>>>> b16b470 (Initial commit in local repo)
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
<<<<<<< HEAD
=======
      {/* Keep the image height the same */}
>>>>>>> b16b470 (Initial commit in local repo)
      <div className="relative h-40 sm:h-48">
        <img
          src={place.image}
          alt={place.name}
          className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
        />
      </div>

<<<<<<< HEAD
      <div className="flex flex-1 flex-col p-3 sm:p-4 text-gray-900">
        <div className="flex-1">
=======
      {/* Slightly reduce padding in the card body */}
      <div className="flex flex-1 flex-col p-3 sm:p-4 text-gray-900">
        <div className="flex-1">
          {/* Title stays the same or slightly smaller */}
>>>>>>> b16b470 (Initial commit in local repo)
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

<<<<<<< HEAD
        <div className="mt-2 sm:mt-3 flex gap-2 sm:gap-3">
          <button
            onClick={() => onMapClick(place.mapLink)}
            className="flex flex-1 items-center justify-center gap-1.5 sm:gap-2
                       rounded-full bg-blue-600
                       px-3 sm:px-4 py-2 sm:py-2.5
                       text-sm font-medium text-white
                       transition hover:bg-blue-700"
          >
            <MapPin className="h-4 w-4" />
=======
        {/* Buttons: smaller font, icons, and padding */}
        <div className="mt-2 sm:mt-3 flex gap-2 sm:gap-3">
          <button
            onClick={() => onMapClick(place.mapLink)}
            className="
              flex flex-1 items-center justify-center gap-1 sm:gap-1.5
              rounded-full bg-blue-600
              px-2 sm:px-3 py-1 sm:py-2
              text-xs sm:text-sm font-medium text-white
              transition hover:bg-blue-700
            "
          >
            {/* Icon smaller: h-3 w-3 on mobile, h-4 w-4 on larger */}
            <MapPin className="h-3 w-3 sm:h-4 sm:w-4" />
>>>>>>> b16b470 (Initial commit in local repo)
            View Map
          </button>

          {place.externalBookingUrl ? (
            <button
              onClick={() => onExternalBookingClick(place.externalBookingUrl!)}
<<<<<<< HEAD
              className="flex flex-1 items-center justify-center gap-1.5 sm:gap-2
                         rounded-full bg-green-600
                         px-3 sm:px-4 py-2 sm:py-2.5
                         text-sm font-medium text-white
                         transition hover:bg-green-700"
            >
              <ExternalLink className="h-4 w-4" />
              Book Now
=======
              className="
                flex flex-1 items-center justify-center gap-1 sm:gap-1.5
                rounded-full bg-green-600
                px-2 sm:px-3 py-1 sm:py-2
                text-xs sm:text-sm font-medium text-white
                transition hover:bg-green-700
              "
            >
              <ExternalLink className="h-3 w-3 sm:h-4 sm:w-4" />
              Book
>>>>>>> b16b470 (Initial commit in local repo)
            </button>
          ) : (
            <Link
              href={`/regions/${region.id}/${category.id}/${subcategory.id}/places/${place.id}/activities`}
<<<<<<< HEAD
              className="flex flex-1 items-center justify-center gap-1.5 sm:gap-2
                         rounded-full bg-green-600
                         px-3 sm:px-4 py-2 sm:py-2.5
                         text-sm font-medium text-white
                         transition hover:bg-green-700
                         text-center"
            >
              View Activities
=======
              className="
                flex flex-1 items-center justify-center gap-1 sm:gap-1.5
                rounded-full bg-green-600
                px-2 sm:px-3 py-1 sm:py-2
                text-xs sm:text-sm font-medium text-white
                transition hover:bg-green-700
                text-center
              "
            >
              <ExternalLink className="h-3 w-3 sm:h-4 sm:w-4" />
              Activities
>>>>>>> b16b470 (Initial commit in local repo)
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}

<<<<<<< HEAD
=======

>>>>>>> b16b470 (Initial commit in local repo)
