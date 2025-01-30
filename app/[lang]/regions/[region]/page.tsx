import { i18n } from '@/lib/i18n-config'; // Edge-friendly config (no Node modules)
import { REGIONS } from '@/lib/constants';
import RegionContent from './region-content';
import { Metadata } from 'next';

/**
 * Generate static params for *all* combos of [lang] + [region].
 * Example: /en/regions/kanto, /ja/regions/kansai, etc.
 */
export function generateStaticParams() {
  return i18n.locales.flatMap((locale) =>
    REGIONS.map((r) => ({
      lang: locale,
      region: r.id,
    }))
  );
}

/**
 * Dynamically create SEO metadata for each region (and optional locale).
 */
export function generateMetadata({
  params,
}: {
  params: { lang: string; region: string };
}): Metadata {
  const region = REGIONS.find((r) => r.id === params.region);

  if (!region) {
    return {
      title: 'Region Not Found',
      description: 'The requested region could not be found.',
    };
  }

  return {
    title: `${region.name} Travel Guide - Explore ${region.base} and Surroundings`,
    description: `Discover the best places to visit in ${region.name}, Japan. Explore ${region.base} and popular destinations like ${region.dayTrips.join(', ')}. Find local experiences and guided tours.`,
    keywords: [
      `${region.name} travel`,
      `${region.base} tourism`,
      'Japan travel guide',
      'Japanese culture',
      ...region.dayTrips.map((trip) => `${trip} travel`),
    ],
    openGraph: {
      title: `${region.name} Travel Guide - Wanderlust Japan`,
      description: `Explore ${region.name}, Japan - from ${region.base} to ${region.dayTrips.join(', ')}. Find authentic local experiences and guided tours.`,
      images: [
        {
          url: region.thumbnail,
          width: 1200,
          height: 630,
          alt: `${region.name} Region`,
        },
      ],
    },
  };
}

/**
 * The actual page component for /[lang]/regions/[region].
 */
export default function RegionPage({
  params,
}: {
  params: { lang: string; region: string };
}) {
  const region = REGIONS.find((r) => r.id === params.region);

  if (!region) {
    return <div>Region not found</div>;
  }

  return (
    <>
      <RegionContent region={region} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'TouristDestination',
            name: `${region.name}, Japan`,
            description: region.description,
            touristType: [
              'Couples',
              'Families',
              'Adventure Travelers',
              'Culture Enthusiasts',
            ],
            geo: {
              '@type': 'GeoCircle',
              geoMidpoint: {
                '@type': 'GeoCoordinates',
                latitude: 35.6762,
                longitude: 139.6503,
              },
            },
            includesAttraction: region.dayTrips.map((trip) => ({
              '@type': 'TouristAttraction',
              name: trip,
            })),
          }),
        }}
      />
    </>
  );
}
