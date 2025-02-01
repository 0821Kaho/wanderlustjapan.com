import { REGIONS, CATEGORIES, SUBCATEGORIES } from "@/lib/constants";
import { PLACES_DATA } from "@/lib/data/places";
import { ACTIVITIES_DATA } from "@/lib/data/activities";
import ActivitiesClient from "./activities-client";
import type { Metadata } from 'next';

export function generateStaticParams() {
  return REGIONS.flatMap((region) =>
    CATEGORIES.flatMap((category) =>
      (SUBCATEGORIES[category.id as keyof typeof SUBCATEGORIES] || []).flatMap(
        (subcategory) => PLACES_DATA.filter(
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

export function generateMetadata({ params }: { params: { region: string; category: string; subcategory: string; place: string } }): Metadata {
  const region = REGIONS.find((r) => r.id === params.region);
  const category = CATEGORIES.find((c) => c.id === params.category);
  const subcategories = SUBCATEGORIES[params.category as keyof typeof SUBCATEGORIES] || [];
  const subcategory = subcategories.find((s) => s.id === params.subcategory);
  const place = PLACES_DATA.find(p => p.id === params.place);
  const activities = ACTIVITIES_DATA[params.place] || [];

  if (!region || !category || !subcategory || !place) {
    return {
      title: 'Not Found',
      description: 'The requested page could not be found.',
    };
  }

  return {
    title: `Activities at ${place.name} - ${region.name}, Japan`,
    description: `Discover activities and experiences at ${place.name} in ${region.name}, Japan. Book guided tours and authentic local experiences.`,
    openGraph: {
      title: `${place.name} Activities - Wanderlust Japan`,
      description: `Explore ${activities.length} activities at ${place.name} in ${region.name}, Japan. From ${activities[0]?.price.amount.toLocaleString()}¥.`,
      images: [{ 
        url: place.image,
        width: 1200,
        height: 630,
        alt: `Activities at ${place.name}, ${region.name}`
      }],
    },
  };
}

export default function ActivitiesPage({
  params,
}: {
  params: { region: string; category: string; subcategory: string; place: string };
}) {
  const region = REGIONS.find((r) => r.id === params.region);
  const category = CATEGORIES.find((c) => c.id === params.category);
  const subcategories = SUBCATEGORIES[params.category as keyof typeof SUBCATEGORIES] || [];
  const subcategory = subcategories.find((s) => s.id === params.subcategory);
  const place = PLACES_DATA.find(p => p.id === params.place);

  if (!region || !category || !subcategory || !place) {
    return <div>Not found</div>;
  }

  const activities = ACTIVITIES_DATA[params.place] || [];

  return (
    <ActivitiesClient
      region={region}
      category={category}
      subcategory={subcategory}
      activities={activities}
    />
  );
}