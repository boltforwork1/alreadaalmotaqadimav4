import type { LucideIcon } from 'lucide-react';
import { socialMediaServices } from '@/data/socialMediaServices';
import { touristServices } from '@/data/touristServices';

export type ShowcaseService = {
  key: string;
  image: string;
  icon: LucideIcon;
  handleIcons: LucideIcon[];
};

export type ShowcaseCategory = 'touristServices' | 'socialMedia';

export const showcaseCategories: Record<ShowcaseCategory, { detailPath: string; services: ShowcaseService[] }> = {
  touristServices: { detailPath: '/tourist-services', services: touristServices },
  socialMedia: { detailPath: '/social-media-services', services: socialMediaServices },
};

export function findShowcaseService(category: ShowcaseCategory, key: string | undefined): ShowcaseService | undefined {
  return showcaseCategories[category].services.find((service) => service.key === key);
}
