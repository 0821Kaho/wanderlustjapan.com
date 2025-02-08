<<<<<<< HEAD
import { CATEGORIES, REGIONS, SUBCATEGORIES } from '@/lib/constants';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import type { Metadata } from 'next';
=======
import { CATEGORIES, REGIONS, SUBCATEGORIES } from "@/lib/constants";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import type { Metadata } from "next";
>>>>>>> b16b470 (Initial commit in local repo)

export async function generateStaticParams() {
  return REGIONS.flatMap((region) =>
    CATEGORIES.map((category) => ({
      region: region.id,
      category: category.id,
    }))
  );
}

<<<<<<< HEAD
export function generateMetadata({ params }: { params: { region: string; category: string } }): Metadata {
=======
export function generateMetadata({
  params,
}: {
  params: { region: string; category: string };
}): Metadata {
>>>>>>> b16b470 (Initial commit in local repo)
  const region = REGIONS.find((r) => r.id === params.region);
  const category = CATEGORIES.find((c) => c.id === params.category);

  if (!region || !category) {
    return {
<<<<<<< HEAD
      title: 'Not Found',
      description: 'The requested page could not be found.',
=======
      title: "Not Found",
      description: "The requested page could not be found.",
>>>>>>> b16b470 (Initial commit in local repo)
    };
  }

  return {
    title: `${category.name} in ${region.name} - Travel Experiences`,
    description: `Discover ${category.name.toLowerCase()} experiences in ${region.name}, Japan. Find and book authentic local activities.`,
    openGraph: {
      title: `${category.name} in ${region.name} - Wanderlust Japan`,
      description: `Explore ${category.name.toLowerCase()} experiences in ${region.name}, Japan. Find hidden gems and popular activities.`,
<<<<<<< HEAD
      images: [{
        url: region.thumbnail,
        width: 1200,
        height: 630,
        alt: `${category.name} in ${region.name}`
      }],
=======
      images: [
        {
          url: region.thumbnail,
          width: 1200,
          height: 630,
          alt: `${category.name} in ${region.name}`,
        },
      ],
>>>>>>> b16b470 (Initial commit in local repo)
    },
  };
}

export default function CategoryPage({
  params,
}: {
  params: { region: string; category: string };
}) {
  const region = REGIONS.find((r) => r.id === params.region);
  const category = CATEGORIES.find((c) => c.id === params.category);
  const subcategories = SUBCATEGORIES[params.category as keyof typeof SUBCATEGORIES] || [];

  if (!region || !category) {
    return <div>Category not found</div>;
  }

  return (
<<<<<<< HEAD
    <main className="min-h-screen bg-[#001B44] px-4 py-16">
      <div className="mx-auto max-w-3xl">
        <Link
          href={`/regions/${region.id}`}
          className="mb-8 inline-flex items-center text-sm text-white/80 hover:text-white"
        >
          ← Back
        </Link>

=======
    <main className="min-h-screen bg-[#001B44] pt-20 sm:pt-24 pb-8 sm:pb-12 text-white">
      <div className="mx-auto max-w-3xl px-6 sm:px-8">
>>>>>>> b16b470 (Initial commit in local repo)
        <h1 className="mb-2 sm:mb-3 text-center text-1xl sm:text-2xl font-bold text-white">
          {category.name}
        </h1>
        <p className="mb-6 sm:mb-8 text-center text-sm sm:text-base text-gray-300">
          Select an activity type to explore
        </p>

<<<<<<< HEAD
        <div className="space-y-4">
=======
        {/* Slightly smaller spacing between cards: space-y-3 sm:space-y-4 */}
        <div className="space-y-3 sm:space-y-4">
>>>>>>> b16b470 (Initial commit in local repo)
          {subcategories.map((subcategory) => (
            <Link
              key={subcategory.id}
              href={`/regions/${region.id}/${category.id}/${subcategory.id}/places`}
<<<<<<< HEAD
              className="flex items-center justify-between rounded-lg bg-white p-4 shadow-lg transition hover:shadow-xl"
            >
              <span className="text-lg text-gray-900">{subcategory.name}</span>
              <span className="flex items-center gap-2 text-sm font-medium text-blue-600">
                View Places
                <ArrowRight className="h-4 w-4" />
=======
              // Reduced padding: p-2 sm:p-3
              className="flex items-center justify-between rounded-lg bg-white p-2 sm:p-3 shadow-lg transition hover:shadow-xl"
            >
              {/* Title: text-sm → text-base on larger screens */}
              <span className="text-sm sm:text-base text-gray-900 font-medium">
                {subcategory.name}
              </span>
              {/* Tighter gap: gap-1 instead of gap-2, smaller text */}
              <span className="flex items-center gap-1 text-[11px] sm:text-sm font-medium text-blue-600">
                View Places
                {/* Smaller icon: h-3 w-3 on mobile */}
                <ArrowRight className="h-3 w-3 sm:h-4 sm:w-4" />
>>>>>>> b16b470 (Initial commit in local repo)
              </span>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
<<<<<<< HEAD
}
=======
}
>>>>>>> b16b470 (Initial commit in local repo)
