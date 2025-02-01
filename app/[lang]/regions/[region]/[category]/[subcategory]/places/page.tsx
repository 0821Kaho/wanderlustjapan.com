import { REGIONS, CATEGORIES, SUBCATEGORIES } from '@/lib/constants';
import { PLACES_DATA } from '@/lib/data/places';
import PlacesClient from './places-client';
import type { Metadata } from 'next';

export function generateStaticParams() {
  return REGIONS.flatMap((region) =>
    CATEGORIES.flatMap((category) =>
      (SUBCATEGORIES[category.id as keyof typeof SUBCATEGORIES] || []).map(
        (subcategory) => ({
          region: region.id,
          category: category.id,
          subcategory: subcategory.id,
        })
      )
    )
  );
}

export function generateMetadata({ params }: { params: { region: string; category: string; subcategory: string } }): Metadata {
  const region = REGIONS.find((r) => r.id === params.region);
  const category = CATEGORIES.find((c) => c.id === params.category);
  const subcategories = SUBCATEGORIES[params.category as keyof typeof SUBCATEGORIES] || [];
  const subcategory = subcategories.find((s) => s.id === params.subcategory);

  if (!region || !category || !subcategory) {
    return {
      title: 'Not Found',
      description: 'The requested page could not be found.',
    };
  }

  const places = PLACES_DATA.filter(
    (place) =>
      place.region === params.region &&
      place.category === params.category &&
      place.subCategory === params.subcategory
  );

  return {
    title: `${subcategory.name} in ${region.name} - Places to Visit`,
    description: `Discover ${places.length} ${subcategory.name.toLowerCase()} destinations in ${region.name}, Japan. Find the best spots and book authentic experiences.`,
    openGraph: {
      title: `${subcategory.name} in ${region.name} - Wanderlust Japan`,
      description: `Explore ${places.length} ${subcategory.name.toLowerCase()} destinations in ${region.name}, Japan. Find hidden gems and popular spots.`,
      images: places.length > 0 ? [{
        url: places[0].image,
        width: 1200,
        height: 630,
        alt: `${subcategory.name} in ${region.name}`
      }] : undefined,
    },
  };
}

export default function PlacesPage({
  params,
}: {
  params: { region: string; category: string; subcategory: string };
}) {
  const region = REGIONS.find((r) => r.id === params.region);
  const category = CATEGORIES.find((c) => c.id === params.category);
  const subcategories = SUBCATEGORIES[params.category as keyof typeof SUBCATEGORIES] || [];
  const subcategory = subcategories.find((s) => s.id === params.subcategory);

  if (!region || !category || !subcategory) {
    return <div>Not found</div>;
  }

  const filteredPlaces = PLACES_DATA.filter(
    (place) =>
      place.region === params.region &&
      place.category === params.category &&
      place.subCategory === params.subcategory
  );

  return (
    <PlacesClient
      region={region}
      category={category}
      subcategory={subcategory}
      places={filteredPlaces}
    />
  );
}