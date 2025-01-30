import { CATEGORIES, REGIONS, SUBCATEGORIES } from '@/lib/constants';
import { ArrowRight, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export async function generateStaticParams() {
  return REGIONS.flatMap((region) =>
    CATEGORIES.map((category) => ({
      region: region.id,
      category: category.id,
    }))
  );
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
    <main className="min-h-screen bg-[#001B44] px-4 py-6 sm:py-16">
      <div className="mx-auto max-w-3xl">
        <Link
          href={`/regions/${region.id}`}
          className="mb-4 sm:mb-8 inline-flex items-center gap-2 text-sm text-white/80 hover:text-white"
        >
          <ArrowLeft className="h-4 w-4" />
          <span>Back</span>
        </Link>

        <h1 className="mb-2 sm:mb-4 text-center text-2xl sm:text-4xl font-bold text-white">
          {category.name}
        </h1>
        <p className="mb-6 sm:mb-12 text-center text-sm sm:text-lg text-gray-300">
          Select an activity type to explore
        </p>

        <div className="space-y-2 sm:space-y-4">
          {subcategories.map((subcategory) => (
            <Link
              key={subcategory.id}
              href={`/regions/${region.id}/${category.id}/${subcategory.id}/places`}
              className="flex items-center justify-between rounded-lg bg-white p-3 sm:p-4 shadow-lg transition hover:shadow-xl"
            >
              <span className="text-base sm:text-lg text-gray-900">{subcategory.name}</span>
              <span className="flex items-center gap-1 sm:gap-2 text-sm font-medium text-blue-600">
                View Places
                <ArrowRight className="h-4 w-4" />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}