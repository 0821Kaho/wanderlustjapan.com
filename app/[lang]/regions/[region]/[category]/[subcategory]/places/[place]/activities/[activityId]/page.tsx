"use client";

import { useParams, useRouter } from "next/navigation";
import { ACTIVITIES_DATA } from "@/lib/data/activities";
import { ArrowLeft, ExternalLink, MessageCircle } from "lucide-react";
import type { Activity } from "@/lib/types";

export default function ActivityDetailPage() {
  const params = useParams();
  const router = useRouter();

  // placeとactivityIdがstring[]かもしれないので単一文字列に変換
  const placeParam = Array.isArray(params.place) ? params.place[0] : params.place;
  const activityIdParam = Array.isArray(params.activityId) ? params.activityId[0] : params.activityId;

  // Activitiesの配列を取得
  const allActivities = ACTIVITIES_DATA[placeParam] || [];
  // findで型注釈をつける
  const activity: Activity | undefined = allActivities.find(
    (a: Activity) => a.id === activityIdParam
  );

  if (!activity) {
    return (
      <div className="min-h-screen bg-[#001B44] text-white p-8">
        Activity not found
      </div>
    );
  }

  const openExternalLink = (url: string) => {
    window.open(url, "_blank");
  };

  return (
    <main className="min-h-screen bg-[#001B44] px-4 py-8 sm:py-16 text-white">
      <div className="mx-auto max-w-3xl">
        {/* Back ボタン */}
        <button
          onClick={() => router.back()}
          className="mb-6 inline-flex items-center gap-2 text-sm text-white/80 hover:text-white"
        >
          <ArrowLeft className="h-4 w-4" />
          Back
        </button>

        <h1 className="mb-4 text-center text-3xl sm:text-4xl font-bold">
          {activity.name}
        </h1>

        <div className="relative mb-6 h-60 sm:h-72">
          <img
            src={activity.image}
            alt={activity.name}
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50" />
        </div>

        <div className="mb-4 flex items-center justify-between px-2">
          <div className="rounded-full bg-blue-600 px-3 py-1 text-sm">
            {activity.duration}
          </div>
          <div className="text-lg font-bold">
            ¥{activity.price.amount.toLocaleString()}
          </div>
        </div>

        {/* 全文表示 (SEOに反映) */}
        <p className="text-base sm:text-lg px-2 text-gray-100 mb-6 whitespace-pre-line">
          {activity.description}
        </p>

        <div className="flex flex-col gap-3 px-2">
          <button
            onClick={() => openExternalLink(activity.bookingUrl)}
            className="flex items-center justify-center gap-2 rounded-full bg-blue-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-blue-700"
          >
            <ExternalLink className="h-4 w-4" />
            Book Now
          </button>
          <button
            onClick={() => openExternalLink(activity.helpUrl)}
            className="flex items-center justify-center gap-2 rounded-full bg-green-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-green-700"
          >
            <MessageCircle className="h-4 w-4" />
           Support
          </button>
        </div>
      </div>
    </main>
  );
}
