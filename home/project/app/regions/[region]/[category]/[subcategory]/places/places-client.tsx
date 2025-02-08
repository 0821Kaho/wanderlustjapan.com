"use client";

import React from "react";
import { MapPin, ExternalLink } from "lucide-react";
import Link from "next/link";
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
    <main className="min-h-screen bg-[#001B44] px-4 pt-24 sm:pt-28 pb-8 sm:pb-12">
      <div className="mx-auto max-w-7xl text-white">
        {/* Title / SubTitle */}
        <h1 className="mb-3 sm:mb-4 text-center text-3xl sm:text-4xl font-bold">
          {subcategory.name} in {region.name}
        </h1>
        <p className="mb-8 sm:mb-10 text-center text-base sm:text-lg text-gray-300">
          Choose a destination to explore activities
        </p>

        {/* Card grid */}
        <div className="grid gap-4 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {places.map((place) => (
            <div
              key={place.id}
              className="group flex flex-col overflow-hidden rounded-lg bg-white shadow-lg transition hover:shadow-xl text-gray-900"
            >
              {/* Larger card image height: h-44 sm:h-52 */}
              <div className="relative h-44 sm:h-52">
                <img
                  src={place.image}
                  alt={place.name}
                  className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
                />
                {/* Overlay (remove if unwanted) */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              </div>

              {/* More space inside */}
              <div className="flex flex-1 flex-col p-5 sm:p-6">
                <h2 className="mb-2 text-lg sm:text-xl font-semibold">
                  {place.name}
                </h2>
                <p className="text-xs sm:text-sm text-gray-600">
                  {place.description}
                </p>

                {/* Buttons row */}
                <div className="mt-4 sm:mt-6 flex gap-2 sm:gap-3">
                  {/* 
                      Only call openGoogleMaps if mapLink is defined, 
                      preventing TS error about string | undefined 
                  */}
                  <button
                    onClick={() => {
                      if (place.mapLink) {
                        openGoogleMaps(place.mapLink);
                      }
                    }}
                    className="flex flex-1 items-center justify-center gap-1.5 sm:gap-2
                               rounded-full bg-blue-600 px-3 sm:px-4 py-2 sm:py-2.5
                               text-sm font-medium text-white
                               transition hover:bg-blue-700"
                  >
                    <MapPin className="h-4 w-4" />
                    View Map
                  </button>

                  {place.externalBookingUrl ? (
                    <button
                      onClick={() => openExternalBooking(place.externalBookingUrl!)}
                      className="flex flex-1 items-center justify-center gap-1.5 sm:gap-2
                                 rounded-full bg-green-600 px-3 sm:px-4 py-2 sm:py-2.5
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
                                 rounded-full bg-green-600 px-3 sm:px-4 py-2 sm:py-2.5
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
          ))}
        </div>
      </div>
    </main>
  );
}
