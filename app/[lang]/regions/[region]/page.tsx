"use client";

import { useParams } from "next/navigation";
import { REGIONS, CATEGORIES } from "@/lib/constants";
import Link from "next/link";
/* いろんなアイコンをインポート */
import {
  Mountain,
  Landmark,
  Brush,
  Pizza,
  FerrisWheel,
  ShoppingBag,
  Building2,
  Baby,
  Flower,   // ← SpaやLotusがない場合、Flowerなど別のアイコンを代用
  Dumbbell,
  Bus,
  Gift,
} from "lucide-react";

export default function RegionDetailPage() {
  const params = useParams();
  const lang = params.lang as string;
  const regionId = params.region as string;

  const region = REGIONS.find((r) => r.id === regionId);
  if (!region) {
    return (
      <main className="min-h-screen bg-[#001B44] text-white p-8">
        <h1 className="text-2xl font-bold mb-4">Region not found</h1>
      </main>
    );
  }

  // カテゴリIDに応じて異なるアイコンを返す
  function getCategoryIcon(categoryId: string) {
    switch (categoryId) {
      case "nature-outdoor":
        return <Mountain className="h-5 w-5 text-gray-900" />;
      case "history-culture":
        return <Landmark className="h-5 w-5 text-gray-900" />;
      case "art-museum":
        return <Brush className="h-5 w-5 text-gray-900" />;
      case "food-drink":
        return <Pizza className="h-5 w-5 text-gray-900" />;
      case "theme-park":
        return <FerrisWheel className="h-5 w-5 text-gray-900" />;
      case "shopping-market":
        return <ShoppingBag className="h-5 w-5 text-gray-900" />;
      case "city-nightlife":
        return <Building2 className="h-5 w-5 text-gray-900" />;
      case "family-kids":
        return <Baby className="h-5 w-5 text-gray-900" />;
      case "relaxation-wellness":
        // Lotus / Spa がない場合、Flower に置き換え
        return <Flower className="h-5 w-5 text-gray-900" />;
      case "sports-active":
        return <Dumbbell className="h-5 w-5 text-gray-900" />;
      case "transportation":
        return <Bus className="h-5 w-5 text-gray-900" />;
      case "souvenir":
        return <Gift className="h-5 w-5 text-gray-900" />;
      default:
        // title= はTypeScriptエラーになるので aria-label= に変更
        return <Landmark className="h-5 w-5 text-gray-900" aria-label="Default Icon" />;
    }
  }

  return (
    <main className="min-h-screen bg-[#001B44] text-white p-8">
      <div className="mx-auto max-w-3xl">
        <Link
          href={`/${lang}/regions`}
          className="mb-8 inline-flex items-center text-sm text-white/80 hover:text-white"
        >
          ← Back to Regions
        </Link>

        <h1 className="mb-2 text-center text-4xl font-bold">{region.name}</h1>
        <p className="mb-8 text-center text-lg text-gray-300">
          Choose a category below
        </p>

        <div className="grid gap-4">
          {CATEGORIES.map((category) => {
            const icon = getCategoryIcon(category.id);
            return (
              <Link
                key={category.id}
                href={`/${lang}/regions/${regionId}/${category.id}`}
                className="block rounded-lg bg-white p-4 shadow-lg transition hover:shadow-xl text-gray-900"
              >
                <div className="flex items-center gap-3">
                  {icon}
                  <span className="text-lg font-semibold">{category.name}</span>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </main>
  );
}
