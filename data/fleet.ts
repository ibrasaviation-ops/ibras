import {
  Users,
  Settings,
  Wind,
  Calendar,
  Plane,
  Award,
  Shield,
  Sun,
  Layout,
  Gauge,
} from 'lucide-react';

import { LucideIcon } from 'lucide-react';
interface Spec {
  label: string;
  value: string;
  icon: LucideIcon;
}

export interface Aircraft {
  id: string;
  name: string;
  category: string;
  description: string;
  specs: Spec[];
  image: string;
}
export const aircraftData: Aircraft[] = [
  {
    id: 'cessna-150',
    name: 'Cessna 150',
    category: 'Foundation Training Aircraft',
    description:
      'A reliable two-seat trainer designed to help student pilots master the fundamentals of flight, including takeoffs, landings, and basic maneuvers.',
    specs: [
      { label: 'Seats', value: '2', icon: Users },
      { label: 'Engine', value: 'Single', icon: Settings },
      { label: 'Configuration', value: 'High-Wing', icon: Wind },
      { label: 'Training Role', value: 'Primary Trainer', icon: Award },
    ],
    image: 'Cessna-150.jpg',
  },

  {
    id: 'cessna-172',
    name: 'Cessna 172 Skyhawk',
    category: 'Industry Standard Trainer',
    description:
      'The world’s most popular training aircraft, trusted for Private Pilot, Instrument Rating, and cross-country flight training.',
    specs: [
      { label: 'Seats', value: '4', icon: Users },
      { label: 'Engine', value: 'Single', icon: Settings },
      { label: 'Configuration', value: 'High-Wing', icon: Wind },
      { label: 'Training Role', value: 'PPL & IFR Training', icon: Award },
    ],
    image: 'Cessna-172.png',
  },

  {
    id: 'tecnam-p2010',
    name: 'Tecnam P2010',
    category: 'Modern Training Aircraft',
    description:
      'A next-generation training aircraft featuring a spacious cabin, modern avionics, and excellent performance for both training and cross-country flying.',
    specs: [
      { label: 'Seats', value: '4', icon: Users },
      { label: 'Engine', value: 'Single', icon: Settings },
      { label: 'Configuration', value: 'High-Wing', icon: Wind },
      { label: 'Training Role', value: 'Advanced Training', icon: Award },
    ],
    image: 'Tecnam-P2010.jpeg',
  },
];
