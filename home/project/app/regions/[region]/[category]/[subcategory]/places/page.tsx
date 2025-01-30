import { REGIONS, CATEGORIES, SUBCATEGORIES } from '@/lib/constants';
import { PLACES_DATA } from '@/lib/data/places';
import PlacesClient from './places-client';

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

  // Filter places based on region, category, and subcategory
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