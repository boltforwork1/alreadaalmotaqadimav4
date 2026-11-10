import { BookOpen, CalendarDays, Clapperboard, FlaskConical, FingerprintPattern as Fingerprint, Megaphone, MessagesSquare, Palette, PenTool, Search, Share2, Target } from 'lucide-react';
import type { ShowcaseService } from '@/data/serviceShowcase';

export const socialMediaServices: ShowcaseService[] = [
  {
    key: 'socialMediaManagement',
    icon: Share2,
    handleIcons: [CalendarDays, Clapperboard, MessagesSquare],
    image: 'https://images.pexels.com/photos/6016362/pexels-photo-6016362.jpeg?auto=compress&cs=tinysrgb&w=1000',
  },
  {
    key: 'paidAdvertising',
    icon: Megaphone,
    handleIcons: [Target, PenTool, FlaskConical],
    image: 'https://images.pexels.com/photos/577210/pexels-photo-577210.jpeg?auto=compress&cs=tinysrgb&w=1000',
  },
  {
    key: 'brandIdentity',
    icon: Palette,
    handleIcons: [Fingerprint, BookOpen, Search],
    image: 'https://images.pexels.com/photos/7598009/pexels-photo-7598009.jpeg?auto=compress&cs=tinysrgb&w=1000',
  },
];
