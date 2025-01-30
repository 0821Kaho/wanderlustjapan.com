import { REGIONS } from '@/lib/constants';

export function generateStaticParams() {
  return REGIONS.map((region) => ({
    region: region.id,
  }));
}