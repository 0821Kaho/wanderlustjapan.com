import { CATEGORIES, REGIONS, SUBCATEGORIES } from '@/lib/constants';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import type { Metadata } from 'next';

export async function generateStaticParams() {
  return REGIONS.flatMap((region) =>
    CATEGORIES.map((category) => ({
      region: region.id,
      category: category.id,
    }))
  );
}

export function generateMetadata({ params }: { params: { region: string; category: string } }): Metadata {
  const region = REGIONS.find((r) => r.id === params.region);
  const category = CATEGORIES.find((c) => c.id === params.category);

  if (!region || !category) {
    return {
      title: 'Not Found',
      description: 'The requested page could not be found.',
    };
  }

  return {
    title: `${category.name} in ${region.name} - Travel Experiences`,
    description: `Discover ${category.name.toLowerCase()} experiences in ${region.name}, Japan. Find and book authentic local activities.`,
    openGraph: {
      title: `${category.name} in ${region.name} - Wanderlust Japan`,
      description: `Explore ${category.name.toLowerCase()} experiences in ${region.name}, Japan. Find hidden gems and popular activities.`,
      images: [{
        url: region.thumbnail,
        width: 1200,
        height: 630,
        alt: `${category.name} in ${region.name}`
      }],
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
    <main className="min-h-screen bg-[#001B44] px-4 py-16">
      <div className="mx-auto max-w-3xl">

        <h1 className="mb-2 sm:mb-3 text-center text-1xl sm:text-2xl font-bold text-white">
          {category.name}
        </h1>
        <p className="mb-6 sm:mb-8 text-center text-sm sm:text-base text-gray-300">
          Select an activity type to explore
        </p>

        <div className="space-y-3">
          {subcategories.map((subcategory) => (
            <Link
              key={subcategory.id}
              href={`/regions/${region.id}/${category.id}/${subcategory.id}/places`}
              className="flex items-center justify-between rounded-lg bg-white p-3 shadow-lg transition hover:shadow-xl"
            >
              <span className="text-sm text-gray-900">{subcategory.name}</span>
              <span className="flex items-center gap-2 text-xs font-medium text-blue-600">
                View Places
                <ArrowRight className="h-3 w-3" />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
