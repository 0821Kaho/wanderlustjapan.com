"use client";

import { useParams } from "next/navigation";
import { REGIONS, CATEGORIES } from "@/lib/constants";
import {
  Mountain,
  Landmark,
  Brush,
  Pizza,
  FerrisWheel,
  ShoppingBag,
  Building2,
  Baby,
  Flower,
  Dumbbell,
  Bus,
  Gift,
} from "lucide-react";
import Link from "next/link";

export default function RegionDetailPage() {
  const params = useParams();
  const lang = params.lang as string;
  const regionId = params.region as string;

  // Find the matching region
  const region = REGIONS.find((r) => r.id === regionId);
  if (!region) {
    return (
      <main className="min-h-screen bg-[#001B44] text-white p-8">
        <h1 className="text-2xl font-bold mb-4">Region not found</h1>
      </main>
    );
  }

<<<<<<< HEAD
  // Use brand color (blue) for icons
  function getCategoryIcon(categoryId: string) {
    const baseClasses = "h-5 w-5 text-blue-600 transition";
=======
  // Smaller icon size
  function getCategoryIcon(categoryId: string) {
    // h-4 w-4 instead of h-5 w-5
    const baseClasses = "h-4 w-4 text-blue-600 transition";
>>>>>>> b16b470 (Initial commit in local repo)
    switch (categoryId) {
      case "nature-outdoor":
        return <Mountain className={baseClasses} />;
      case "history-culture":
        return <Landmark className={baseClasses} />;
      case "art-museum":
        return <Brush className={baseClasses} />;
      case "food-drink":
        return <Pizza className={baseClasses} />;
      case "theme-park":
        return <FerrisWheel className={baseClasses} />;
      case "shopping-market":
        return <ShoppingBag className={baseClasses} />;
      case "city-nightlife":
        return <Building2 className={baseClasses} />;
      case "family-kids":
        return <Baby className={baseClasses} />;
      case "relaxation-wellness":
        return <Flower className={baseClasses} />;
      case "sports-active":
        return <Dumbbell className={baseClasses} />;
      case "transportation":
        return <Bus className={baseClasses} />;
      case "souvenir":
        return <Gift className={baseClasses} />;
      default:
        return <Landmark className={baseClasses} aria-label="Default Icon" />;
    }
  }

  return (
    <main className="min-h-screen bg-[#001B44] pt-20 sm:pt-24 pb-8 sm:pb-12 text-white">
      <div className="mx-auto max-w-3xl px-6 sm:px-8">
<<<<<<< HEAD
        <Link
          href={`/${lang}/regions`}
          className="mb-6 inline-flex items-center text-sm text-white/80 hover:text-white"
        >
          ← Back
        </Link>

=======
>>>>>>> b16b470 (Initial commit in local repo)
        <h1 className="mb-2 sm:mb-3 text-center text-1xl sm:text-2xl font-bold text-white">
          {region.name}
        </h1>
        <p className="mb-6 sm:mb-8 text-center text-sm sm:text-base text-gray-300">
          Choose a category below
        </p>

<<<<<<< HEAD
        {/* Map over your CATEGORIES for this region */}
        <div className="grid gap-4">
=======
        {/* Tighter gap on mobile: gap-3 sm:gap-4 */}
        <div className="grid gap-3 sm:gap-4">
>>>>>>> b16b470 (Initial commit in local repo)
          {CATEGORIES.map((category) => {
            const icon = getCategoryIcon(category.id);
            return (
              <Link
                key={category.id}
                href={`/${lang}/regions/${regionId}/${category.id}`}
<<<<<<< HEAD
                className="block rounded-lg bg-white p-4 shadow-lg transition hover:shadow-xl text-gray-900"
              >
                <div className="flex items-center gap-3">
                  {icon}
                  <span className="text-lg font-semibold">{category.name}</span>
=======
                // Less padding: p-3 sm:p-4
                className="block rounded-lg bg-white p-3 sm:p-4 shadow-lg transition hover:shadow-xl text-gray-900"
              >
                <div className="flex items-center gap-2 sm:gap-3">
                  {icon}
                  {/* Smaller text: text-sm on mobile, text-base on larger */}
                  <span className="text-sm sm:text-base font-semibold">
                    {category.name}
                  </span>
>>>>>>> b16b470 (Initial commit in local repo)
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </main>
  );
}
<<<<<<< HEAD
=======

>>>>>>> b16b470 (Initial commit in local repo)
