"use client";

import { ArrowLeft, ExternalLink, MessageCircle } from 'lucide-react';
import Link from 'next/link';
import type { Region, Category, Subcategory, Activity } from '@/lib/types';

interface ActivitiesClientProps {
  region: Region;
  category: Category;
  subcategory: Subcategory;
  activities: Activity[];
}

export default function ActivitiesClient({
  region,
  category,
  subcategory,
  activities,
}: ActivitiesClientProps) {
  const openExternalLink = (url: string) => {
    window.open(url, "_blank");
  };

  return (
    <main className="min-h-screen bg-[#001B44] px-4 py-8 sm:py-16">
      <div className="mx-auto max-w-7xl">
        <Link
          href={`/regions/${region.id}/${category.id}/${subcategory.id}/places`}
          className="mb-6 sm:mb-8 inline-flex items-center gap-2 text-sm text-white/80 hover:text-white"
        >
          <ArrowLeft className="h-4 w-4" />
          Back
        </Link>

        <h1 className="mb-3 sm:mb-4 text-center text-3xl sm:text-4xl font-bold text-white">
          Activities
        </h1>
        <p className="mb-8 sm:mb-12 text-center text-base sm:text-lg text-gray-300">
          Choose from our curated activities
        </p>

        <div className="grid gap-4 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {activities.map((activity) => (
            <div
              key={activity.id}
              className="group overflow-hidden rounded-lg bg-white shadow-lg transition hover:shadow-xl"
            >
              <div className="relative h-40 sm:h-48">
                <img
                  src={activity.image}
                  alt={activity.name}
                  className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 right-3 sm:right-4 flex items-center justify-between text-white">
                  <div className="rounded-full bg-blue-600 px-2 sm:px-3 py-0.5 sm:py-1 text-xs sm:text-sm">
                    {activity.duration}
                  </div>
                  <div className="text-base sm:text-lg font-bold">
                    ¥{activity.price.amount.toLocaleString()}
                  </div>
                </div>
              </div>
              <div className="p-4 sm:p-6">
                <h2 className="mb-2 text-lg sm:text-xl font-semibold text-gray-900">
                  {activity.name}
                </h2>
                <p className="mb-4 text-xs sm:text-sm text-gray-600">{activity.description}</p>
                <div className="flex flex-col gap-2 sm:gap-3">
                  <button
                    onClick={() => openExternalLink(activity.bookingUrl)}
                    className="flex items-center justify-center gap-1.5 sm:gap-2 rounded-full bg-blue-600 px-3 sm:px-4 py-2 sm:py-2.5 text-sm font-medium text-white transition hover:bg-blue-700"
                  >
                    <ExternalLink className="h-4 w-4" />
                    Book Now
                  </button>
                  <button
                    onClick={() => openExternalLink(activity.helpUrl)}
                    className="flex items-center justify-center gap-1.5 sm:gap-2 rounded-full bg-green-600 px-3 sm:px-4 py-2 sm:py-2.5 text-sm font-medium text-white transition hover:bg-green-700"
                  >
                    <MessageCircle className="h-4 w-4" />
                    Help? (10% fee)
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}