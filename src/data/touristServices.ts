import { Building2, FerrisWheel, Gauge, Landmark, Ship, Tent, type LucideIcon } from 'lucide-react';

export type TouristService = {
  key: string;
  image: string;
  icon: LucideIcon;
};

export const touristServices: TouristService[] = [
  {
    key: 'burjKhalifa',
    icon: Building2,
    image: 'https://images.pexels.com/photos/10619945/pexels-photo-10619945.jpeg?auto=compress&cs=tinysrgb&w=1000',
  },
  {
    key: 'cityTours',
    icon: Landmark,
    image: 'https://images.pexels.com/photos/36151739/pexels-photo-36151739.jpeg?auto=compress&cs=tinysrgb&w=1000',
  },
  {
    key: 'desertSafari',
    icon: Tent,
    image: 'https://images.pexels.com/photos/7817185/pexels-photo-7817185.jpeg?auto=compress&cs=tinysrgb&w=1000',
  },
  {
    key: 'dhowCruise',
    icon: Ship,
    image: 'https://images.pexels.com/photos/33516491/pexels-photo-33516491.jpeg?auto=compress&cs=tinysrgb&w=1000',
  },
  {
    key: 'dubaiParks',
    icon: FerrisWheel,
    image: 'https://images.pexels.com/photos/749061/pexels-photo-749061.jpeg?auto=compress&cs=tinysrgb&w=1000',
  },
  {
    key: 'ferrariWorld',
    icon: Gauge,
    image: 'https://images.pexels.com/photos/36329344/pexels-photo-36329344.jpeg?auto=compress&cs=tinysrgb&w=1000',
  },
];

export function findTouristService(key: string | undefined): TouristService | undefined {
  return touristServices.find((service) => service.key === key);
}
