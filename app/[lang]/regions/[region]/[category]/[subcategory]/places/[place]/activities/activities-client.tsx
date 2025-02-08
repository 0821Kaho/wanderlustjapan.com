"use client";

import React, { useState } from "react";
<<<<<<< HEAD
import { ArrowLeft, ExternalLink, MessageCircle } from "lucide-react";
import Link from "next/link";
=======
import { ExternalLink, MessageCircle } from "lucide-react";
>>>>>>> b16b470 (Initial commit in local repo)
import type { Region, Category, Subcategory, Activity } from "@/lib/types";

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
  // Open external links in a new tab
  const openExternalLink = (url: string) => {
    window.open(url, "_blank");
  };

  return (
    <main className="min-h-screen bg-[#001B44] px-4 py-8 sm:py-16">
<<<<<<< HEAD
      <div className="mx-auto max-w-7xl">
        {/* Back link */}
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
=======
      <div className="mx-auto max-w-6xl px-6 sm:px-8 pb-8 sm:pb-12">
        <h1 className="mb-2 sm:mb-3 text-center text-1xl sm:text-2xl font-bold text-white">
          Activities
        </h1>
        <p className="mb-6 sm:mb-8 text-center text-sm sm:text-base text-gray-300">
>>>>>>> b16b470 (Initial commit in local repo)
          Choose from our curated activities
        </p>

        {/* Card grid */}
<<<<<<< HEAD
        <div className="grid gap-2 sm:gap-3 sm:grid-cols-2 lg:grid-cols-3">
=======
        <div className="grid gap-3 sm:gap-4 sm:grid-cols-2 lg:grid-cols-3">
>>>>>>> b16b470 (Initial commit in local repo)
          {activities.map((activity) => (
            <ActivityCard
              key={activity.id}
              activity={activity}
              onOpenLink={openExternalLink}
            />
          ))}
        </div>
      </div>
    </main>
  );
}

<<<<<<< HEAD
/** 
 * Separate Card component that handles the "Read more" toggling for each activity.
 */
=======
>>>>>>> b16b470 (Initial commit in local repo)
function ActivityCard({
  activity,
  onOpenLink,
}: {
  activity: Activity;
  onOpenLink: (url: string) => void;
}) {
  const [showFull, setShowFull] = useState(false);

  const shortText = activity.description.slice(0, 150);
  const isLong = activity.description.length > 150;

  return (
<<<<<<< HEAD
    <div className="group overflow-hidden rounded-lg bg-white shadow-lg transition hover:shadow-xl">
      <div className="relative h-40 sm:h-48">
=======
    <div className="group flex flex-col overflow-hidden rounded-lg bg-white shadow-lg transition hover:shadow-xl">
      {/* Smaller image height; remove the black overlay */}
      <div className="relative h-32 sm:h-36">
>>>>>>> b16b470 (Initial commit in local repo)
        <img
          src={activity.image}
          alt={activity.name}
          className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
        />
<<<<<<< HEAD
        {/* Overlay (comment out if you want no overlay) */}
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

        {/* Partial or full description based on showFull */}
        <p className="text-xs sm:text-sm text-gray-600 mb-2">
          {showFull ? activity.description : isLong ? shortText + "..." : activity.description}
=======
        {/* COMMENT OUT or REMOVE OVERLAY:
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        */}
        {/* If you have a duration/price overlay, place it here if needed:
        <div className="absolute bottom-2 sm:bottom-3 left-2 sm:left-3 right-2 sm:right-3 flex items-center justify-between text-white">
          <div className="rounded-full bg-blue-600 px-2 py-0.5 text-[10px] sm:text-xs">
            {activity.duration}
          </div>
          <div className="text-sm sm:text-base font-bold">
            ¥{activity.price.amount.toLocaleString()}
          </div>
        </div>
        */}
      </div>

      {/* Smaller padding */}
      <div className="flex flex-1 flex-col p-2 sm:p-3 text-gray-900">
        {/* Title & partial description */}
        <h2 className="mb-1 sm:mb-2 text-sm sm:text-base font-semibold line-clamp-2">
          {activity.name}
        </h2>

        <p className="mb-2 text-[10px] sm:text-xs text-gray-600">
          {showFull
            ? activity.description
            : isLong
            ? shortText + "..."
            : activity.description}
>>>>>>> b16b470 (Initial commit in local repo)
        </p>
        {isLong && (
          <button
            onClick={() => setShowFull(!showFull)}
<<<<<<< HEAD
            className="mb-3 text-xs sm:text-sm font-medium text-blue-600 hover:text-blue-700"
=======
            className="mb-2 text-[10px] sm:text-xs font-medium text-blue-600 hover:text-blue-700"
>>>>>>> b16b470 (Initial commit in local repo)
          >
            {showFull ? "Show less" : "Read more"}
          </button>
        )}

<<<<<<< HEAD
        {/* Buttons */}
        <div className="flex flex-col gap-2 sm:gap-3">
          <button
            onClick={() => onOpenLink(activity.bookingUrl)}
            className="flex items-center justify-center gap-1.5 sm:gap-2 
                       rounded-full bg-blue-600 px-3 sm:px-4 py-2 sm:py-2.5 
                       text-sm font-medium text-white 
                       transition hover:bg-blue-700"
          >
            <ExternalLink className="h-4 w-4" />
=======
        {/* Buttons: side by side, smaller */}
        <div className="mt-auto flex flex-nowrap gap-2 sm:gap-3">
          <button
            onClick={() => onOpenLink(activity.bookingUrl)}
            className="
              flex flex-1 items-center justify-center gap-1
              rounded-full bg-blue-600
              px-2 py-1
              text-[10px] sm:text-xs font-medium text-white
              transition hover:bg-blue-700
            "
          >
            <ExternalLink className="h-3 w-3 sm:h-4 sm:w-4" />
>>>>>>> b16b470 (Initial commit in local repo)
            Book Now
          </button>
          <button
            onClick={() => onOpenLink(activity.helpUrl)}
<<<<<<< HEAD
            className="flex items-center justify-center gap-1.5 sm:gap-2 
                       rounded-full bg-green-600 px-3 sm:px-4 py-2 sm:py-2.5 
                       text-sm font-medium text-white 
                       transition hover:bg-green-700"
          >
            <MessageCircle className="h-4 w-4" />
           Support
=======
            className="
              flex flex-1 items-center justify-center gap-1
              rounded-full bg-green-600
              px-2 py-1
              text-[10px] sm:text-xs font-medium text-white
              transition hover:bg-green-700
            "
          >
            <MessageCircle className="h-3 w-3 sm:h-4 sm:w-4" />
            Support
>>>>>>> b16b470 (Initial commit in local repo)
          </button>
        </div>
      </div>
    </div>
  );
}
<<<<<<< HEAD
=======

>>>>>>> b16b470 (Initial commit in local repo)
