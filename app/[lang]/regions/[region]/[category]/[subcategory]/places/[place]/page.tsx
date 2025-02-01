import { REGIONS, CATEGORIES, SUBCATEGORIES } from "@/lib/constants";
import { PLACES_DATA } from "@/lib/data/places";
import { ACTIVITIES_DATA } from "@/lib/data/activities";
import ActivitiesClient from "./activities-client";

export function generateStaticParams() {
  return REGIONS.flatMap((region) =>
    CATEGORIES.flatMap((category) =>
      (SUBCATEGORIES[category.id as keyof typeof SUBCATEGORIES] || []).flatMap(
        (subcategory) =>
          PLACES_DATA.filter(
            (place) =>
              place.region === region.id &&
              place.category === category.id &&
              place.subCategory === subcategory.id
          ).map((place) => ({
            region: region.id,
            category: category.id,
            subcategory: subcategory.id,
            place: place.id,
          }))
      )
    )
  );
}

export default function PlacePage({
  params,
}: {
  params: { region: string; category: string; subcategory: string; place: string };
}) {
  const region = REGIONS.find((r) => r.id === params.region);
  const category = CATEGORIES.find((c) => c.id === params.category);
  const subcategories = SUBCATEGORIES[params.category as keyof typeof SUBCATEGORIES] || [];
  const subcategory = subcategories.find((s) => s.id === params.subcategory);
  const place = PLACES_DATA.find((p) => p.id === params.place);

  if (!region || !category || !subcategory || !place) {
    return <div>Not found</div>;
  }

  const activities = ACTIVITIES_DATA[params.place] || [];

  // Wrap ActivitiesClient in a <main> with top padding to prevent overlap
  return (
    <main className="min-h-screen bg-[#001B44] pt-16 sm:pt-20 px-4 pb-8 sm:pb-16">
      <ActivitiesClient
        region={region}
        category={category}
        subcategory={subcategory}
        activities={activities}
      />
    </main>
  );
}
