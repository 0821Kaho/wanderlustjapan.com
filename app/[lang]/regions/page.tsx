"use client";

import { REGIONS } from '@/lib/constants';
import { MapPin, Navigation } from 'lucide-react';
import Link from 'next/link';

export default function RegionsPage() {
  return (
    <main className="min-h-screen bg-[#001B44] px-4 py-8 sm:py-16">
      <div className="mx-auto max-w-7xl">
        <h1 className="mb-3 sm:mb-4 text-center text-3xl sm:text-4xl md:text-5xl font-bold text-white">
          Where would you like to go?
        </h1>
        <p className="mb-8 sm:mb-12 text-center text-lg sm:text-xl text-gray-300">
          Choose your destination in Japan
        </p>

        <div className="grid gap-4 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {REGIONS.map((region) => (
            <Link
              key={region.id}
              href={`/regions/${region.id}`}
              className="group overflow-hidden rounded-lg bg-white shadow-lg transition hover:shadow-xl"
            >
              <div className="relative h-40 sm:h-48">
                <img
                  src={region.thumbnail}
                  alt={region.name}
                  className="absolute inset-0 h-full w-full object-cover transition duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-transparent p-3 sm:p-4">
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 sm:h-5 sm:w-5 text-white" />
                    <span className="font-bold text-sm sm:text-base text-white">{region.name}</span>
                  </div>
                  <div className="mt-1 sm:mt-2 flex items-center gap-1 sm:gap-2 text-white/90">
                    <Navigation className="h-3 w-3 sm:h-4 sm:w-4" />
                    <span className="text-xs sm:text-sm">Base: {region.base}</span>
                  </div>
                </div>
              </div>
              <div className="p-3 sm:p-4">
                <p className="mb-3 sm:mb-4 text-xs sm:text-sm text-gray-600 line-clamp-2">
                  {region.description}
                </p>
                <div>
                  <h3 className="mb-2 text-xs sm:text-sm font-bold text-gray-900 uppercase tracking-wide">
                    Day-Trip Areas:
                  </h3>
                  <div className="flex flex-wrap gap-1.5 sm:gap-2">
                    {region.dayTrips.map((trip) => (
                      <span
                        key={trip}
                        className="rounded-full bg-blue-50 px-2 sm:px-3 py-0.5 sm:py-1 text-xs sm:text-sm font-semibold text-blue-600"
                      >
                        {trip}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}