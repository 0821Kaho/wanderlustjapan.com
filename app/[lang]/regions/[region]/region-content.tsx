"use client";

import { CATEGORIES } from "@/lib/constants";
import {
  Mountain,
  Landmark,
  Palette,
  UtensilsCrossed,
  FerrisWheel as Ferris,
  ShoppingBag,
  Building2,
  Users,
  // 'Space' is named 'Spa' here; you might rename or choose another icon
  Space as Spa,
  Activity,
  Train,
  Gift,
} from "lucide-react";
import Link from "next/link";
import { type Region } from "@/lib/types";

const iconMap = {
  Mountain,
  Landmark,
  Palette,
  UtensilsCrossed,
  Ferris,
  ShoppingBag,
  Building2,
  Users,
  Spa,
  Activity,
  Train,
  Gift,
};

export default function RegionContent({ region }: { region: Region }) {
  return (
    <main className="min-h-screen bg-[#001B44] pt-20 sm:pt-24 pb-8 sm:pb-12">
      <div className="mx-auto max-w-6xl px-6 sm:px-8">
<<<<<<< HEAD
        <Link
          href="/regions"
          className="mb-6 inline-flex items-center text-sm text-white/80 hover:text-white"
        >
          ← Back to Regions
        </Link>
=======
>>>>>>> b16b470 (Initial commit in local repo)

        <h1 className="mb-2 text-center text-3xl sm:text-4xl font-bold text-white">
          Explore {region.name}
        </h1>
        <p className="mb-8 text-center text-base sm:text-lg text-gray-300">
          Choose a category to discover activities
        </p>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {CATEGORIES.map((category) => {
            const IconComponent = iconMap[category.icon as keyof typeof iconMap];

            return (
              <Link
                key={category.id}
                href={`/regions/${region.id}/${category.id}`}
                className="group rounded-lg bg-white p-6 shadow-lg transition hover:shadow-xl"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 text-blue-600 transition group-hover:bg-blue-600 group-hover:text-white">
                  <IconComponent className="h-6 w-6" />
                </div>
                <h2 className="text-xl font-semibold text-gray-900">
                  {category.name}
                </h2>
              </Link>
            );
          })}
        </div>
      </div>
    </main>
  );
}
