import { Building2, FerrisWheel, Gauge, Landmark, Route, Ship, Star, Tent, Ticket } from 'lucide-react';
import type { ShowcaseService } from '@/data/serviceShowcase';

const handleIcons = [Ticket, Star, Route];

export const touristServices: ShowcaseService[] = [
  {
    key: 'burjKhalifa',
    icon: Building2,
    handleIcons,
    image: 'https://images.pexels.com/photos/10619945/pexels-photo-10619945.jpeg?auto=compress&cs=tinysrgb&w=1000',
  },
  {
    key: 'cityTours',
    icon: Landmark,
    handleIcons,
    image: 'https://images.pexels.com/photos/36151739/pexels-photo-36151739.jpeg?auto=compress&cs=tinysrgb&w=1000',
  },
  {
    key: 'desertSafari',
    icon: Tent,
    handleIcons,
    image: 'https://images.pexels.com/photos/7817185/pexels-photo-7817185.jpeg?auto=compress&cs=tinysrgb&w=1000',
  },
  {
    key: 'dhowCruise',
    icon: Ship,
    handleIcons,
    image: 'https://images.pexels.com/photos/33516491/pexels-photo-33516491.jpeg?auto=compress&cs=tinysrgb&w=1000',
  },
  {
    key: 'dubaiParks',
    icon: FerrisWheel,
    handleIcons,
    image: 'https://images.pexels.com/photos/749061/pexels-photo-749061.jpeg?auto=compress&cs=tinysrgb&w=1000',
  },
  {
    key: 'ferrariWorld',
    icon: Gauge,
    handleIcons,
    image: 'https://images.pexels.com/photos/36329344/pexels-photo-36329344.jpeg?auto=compress&cs=tinysrgb&w=1000',
  },
];
