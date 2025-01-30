import type { Region, Category } from './types';

export const REGIONS: Region[] = [
  {
    id: 'kanto',
    name: 'Kanto',
    base: 'Tokyo',
    description: 'Kanto is anchored by Tokyo and metropolitan capital.',
    thumbnail: '/images/regions/kanto.jpg',
    dayTrips: ['Tokyo', 'Yokohama', 'Kamakura', 'Hakone', 'Mt. Fuji', 'Nikko']
  },
  {
    id: 'kansai',
    name: 'Kansai',
    base: 'Osaka / Kyoto',
    description: "Kansai is often called Japan's cultural heartland, with Kyoto's UNESCO World Heritage sites.",
    thumbnail: '/images/regions/kansai.jpg',
    dayTrips: ['Osaka', 'Kyoto', 'Nara', 'Kobe', 'Himeji', 'Koyasan']
  },
  {
    id: 'hokkaido',
    name: 'Hokkaido',
    base: 'Sapporo',
    description: "Hokkaido is Japan's northern frontier, known for winter sports, fresh seafood, and vast nature.",
    thumbnail: '/images/regions/hokkaido.jpg',
    dayTrips: ['Sapporo', 'Otaru', 'Furano/Biei', 'Noboribetsu', 'Niseko']
  },
  {
    id: 'tohoku',
    name: 'Tohoku',
    base: 'Sendai',
    description: 'Tohoku is the northeastern region of Honshu, known for unspoiled nature, hot springs, and festivals.',
    thumbnail: '/images/regions/tohoku.jpg',
    dayTrips: ['Sendai', 'Matsushima', 'Aomori', 'Ginzan Onsen', 'Iwate']
  },
  {
    id: 'chubu',
    name: 'Chubu',
    base: 'Nagoya',
    description: 'The region is known for mountain landscapes, onsen towns, and scenic old villages.',
    thumbnail: '/images/regions/chubu.jpg',
    dayTrips: ['Nagoya', 'Kanazawa', 'Takayama / Shirakawa-go', 'Shizuoka']
  },
  {
    id: 'chugoku',
    name: 'Chugoku',
    base: 'Hiroshima City',
    description: 'Hiroshima and surroundings offer historical insights plus scenic islands like Miyajima.',
    thumbnail: '/images/regions/chugoku.jpg',
    dayTrips: ['Hiroshima City', 'Miyajima', 'Onomichi', 'Okayama']
  },
  {
    id: 'shikoku',
    name: 'Shikoku',
    base: 'Takamatsu or Matsuyama',
    description: "Shikoku is Japan's fourth main island, known for rural charm and the 88-temple pilgrimage route.",
    thumbnail: '/images/regions/shikoku.jpg',
    dayTrips: ['Naoshima', 'Setouchi', 'Matsuyama', 'Kochi']
  },
  {
    id: 'kyushu',
    name: 'Kyushu',
    base: 'Fukuoka / Hakata',
    description: 'Kyushu is southern Japan, boasting volcanoes, onsen towns, and a distinct cultural history.',
    thumbnail: '/images/regions/kyushu.jpg',
    dayTrips: ['Nagasaki', 'Kumamoto', 'Kagoshima', 'Beppu / Yufuin']
  },
  {
    id: 'okinawa',
    name: 'Okinawa',
    base: 'Naha',
    description: "Okinawa is Japan's tropical paradise, famed for crystal-clear waters and unique culture.",
    thumbnail: '/images/regions/okinawa.jpg',
    dayTrips: ['Naha', 'Kerama Islands', 'Ishigaki / Miyako']
  }
];

export const CATEGORIES = [
  {
    id: 'nature-outdoor',
    name: 'Nature & Outdoor',
    icon: 'Mountain'
  },
  {
    id: 'history-culture',
    name: 'History & Culture',
    icon: 'Landmark'
  },
  {
    id: 'art-museum',
    name: 'Art & Museum',
    icon: 'Palette'
  },
  {
    id: 'food-drink',
    name: 'Food & Drink',
    icon: 'UtensilsCrossed'
  },
  {
    id: 'theme-park-attraction',
    name: 'Theme Park & Attraction',
    icon: 'Ferris'
  },
  {
    id: 'shopping-market',
    name: 'Shopping & Market',
    icon: 'ShoppingBag'
  },
  {
    id: 'city-tourism-nightlife',
    name: 'City Tourism & Nightlife',
    icon: 'Building2'
  },
  {
    id: 'family-kids',
    name: 'Family & Kids',
    icon: 'Users'
  },
  {
    id: 'relaxation-wellness',
    name: 'Relaxation & Wellness',
    icon: 'Spa'
  },
  {
    id: 'sports-active',
    name: 'Sports & Active',
    icon: 'Activity'
  },
  {
    id: 'transportation',
    name: 'Transportation',
    icon: 'Train'
  },
  {
    id: 'souvenir',
    name: 'Souvenir',
    icon: 'Gift'
  }
] as const;

export const SUBCATEGORIES = {
  'nature-outdoor': [
    { id: 'mountain-hiking', name: 'Hiking in Mountains' },
    { id: 'forest-walk', name: 'Forest Walk' },
    { id: 'beaches-coastlines', name: 'Beaches & Coastlines' },
    { id: 'camping', name: 'Camping' },
    { id: 'trekking', name: 'Trekking' },
    { id: 'stargazing', name: 'Stargazing' }
  ],
  'history-culture': [
    { id: 'historical-landmarks', name: 'Historical Landmarks' },
    { id: 'castles', name: 'Castles' },
    { id: 'temples-shrines', name: 'Temples & Shrines' },
    { id: 'cultural-experiences', name: 'Cultural Experiences' }, 
  ],
  'art-museum': [
    { id: 'art-museums', name: 'Art Museums & Galleries' },
    { id: 'art-exhibitions', name: 'Art Exhibitions' },
    { id: 'design-shows', name: 'Design Shows' },
    { id: 'art-workshops', name: 'Art Workshops' }
  ],
  'food-drink': [
    { id: 'local-food-tours', name: 'Local Food Tours' },
    { id: 'cooking-classes', name: 'Cooking Classes' },
    { id: 'izakaya-experience', name: 'Izakaya Experience' },
    { id: 'sake-wine-tastings', name: 'Sake & Wine Tastings' }
  ],
  'theme-park-attraction': [
    { id: 'amusement-parks', name: 'Amusement Parks' },
    { id: 'theme-parks', name: 'Theme Parks' },
    { id: 'aquariums', name: 'Aquariums' },
    { id: 'zoos', name: 'Zoos' },
    { id: 'vr-attractions', name: 'VR Attractions' },
    { id: 'sightseeing-trains', name: 'Sightseeing Trains' }
  ],
  'shopping-market': [
    { id: 'outlet-parks', name: 'Outlet Parks' },
    { id: 'shopping-street-walks', name: 'Shopping Street Walks' },
    { id: 'traditional-crafts', name: 'Traditional Crafts' }
  ],
  'city-tourism-nightlife': [
    { id: 'helicopter-sightseeing', name: 'Helicopter Sightseeing' }, 
    { id: 'city-tours', name: 'City Tours' },
    { id: 'bar-hopping', name: 'Bar Hopping' },
    { id: 'club', name: 'Club Events' },
    { id: 'illumination', name: 'Illumination Tours' },
    { id: 'karaoke-experience', name: 'Karaoke Experience' }
  ],
  'family-kids': [
    { id: 'parent-child-workshops', name: 'Parent-Child Workshops' },
    { id: 'kid-focused-learning', name: 'Kid-Focused Learning' },
    { id: 'childrens-amusement-parks', name: "Children's Amusement Parks" },
    { id: 'large-playground-facilities', name: 'Large Playground Facilities' }
  ],
  'relaxation-wellness': [
    { id: 'hot-springs-onsen', name: 'Hot Springs (Onsen)' },
    { id: 'spas', name: 'Spas' }
  ],
  'sports-active': [
    { id: 'skiing-snowboarding', name: 'Skiing & Snowboarding' },
    { id: 'rafting', name: 'Rafting' },
    { id: 'soccer-football', name: 'Soccer & Football' },
    { id: 'marine-sports', name: 'Marine Sports' },
    { id: 'cycling', name: 'Cycling' }
  ],
  'transportation': [
    { id: 'air-travel', name: 'Airports & Flights' },
    { id: 'bus-travel', name: 'Bus Routes & Terminals' },
    { id: 'ferry-travel', name: 'Ferries & Water Transport' },
    { id: 'train-travel', name: 'Train Stations & Lines' }
  ],
  'souvenir': [
    { id: 'local-sweets', name: 'Local Sweets & Confections' },
    { id: 'regional-snacks', name: 'Regional Snacks' },
    { id: 'traditional-snacks', name: 'Traditional Snacks' },
    { id: 'modern-treats', name: 'Modern Japanese Treats' }
  ]
} as const;