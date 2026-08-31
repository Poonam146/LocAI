export const LOCATIONS = [
  'Hyderabad, India',
  'Bengaluru, India',
  'Mumbai, India',
  'Delhi, India',
  'Chennai, India',
];

export const WEATHER_DATA = {
  'Hyderabad, India': {
    temp: '28°C',
    condition: 'Partly Cloudy',
    feelsLike: '30°C',
    humidity: '62%',
    wind: '12 km/h',
    advice: 'Good time to explore outdoor cafés & rooftop spots.',
  },
  'Bengaluru, India': {
    temp: '24°C',
    condition: 'Pleasant Breeze',
    feelsLike: '24°C',
    humidity: '55%',
    wind: '15 km/h',
    advice: 'Perfect weather for park walks and open-air bistros.',
  },
  'Mumbai, India': {
    temp: '31°C',
    condition: 'Humid & Sunny',
    feelsLike: '35°C',
    humidity: '78%',
    wind: '18 km/h',
    advice: 'Ideal for seaside walks and indoor air-conditioned venues.',
  },
  'Delhi, India': {
    temp: '29°C',
    condition: 'Clear Sky',
    feelsLike: '31°C',
    humidity: '48%',
    wind: '10 km/h',
    advice: 'Great day to visit historic monuments and food markets.',
  },
  'Chennai, India': {
    temp: '32°C',
    condition: 'Warm & Sunny',
    feelsLike: '36°C',
    humidity: '72%',
    wind: '14 km/h',
    advice: 'Best for evening beach strolls and heritage temples.',
  },
};

export const AI_INSIGHTS = {
  'Hyderabad, India': {
    headline: 'Great evening to explore Banjara Hills!',
    body: 'Weather is comfortable right now. Artisanal cafés and rooftop lounges around Jubilee Hills & Banjara Hills are seeing popular activity this evening.',
  },
  'Bengaluru, India': {
    headline: 'Optimal weather for Indiranagar & Koramangala!',
    body: 'Breezy evening temperatures make it a great time for brewery patios, coffee roasters, and park walks in Cubbon Park.',
  },
  'Mumbai, India': {
    headline: 'Popular seaside vibes around Bandra West!',
    body: 'Marine Drive and Bandra cafés are lively. Evening humidity is lowering, creating great conditions for coastal dining.',
  },
  'Delhi, India': {
    headline: 'Ideal afternoon for Connaught Place & Hauz Khas!',
    body: 'Clear skies offer great opportunities for heritage walks, street food discovery, and boutique cafe visits.',
  },
  'Chennai, India': {
    headline: 'Pleasant breeze around Besant Nagar Beach!',
    body: 'Sun is setting nicely. Local beachside eateries and traditional coffee houses are highly recommended tonight.',
  },
};

export const MAP_PINS = [
  {
    id: 1,
    name: 'Roastery Coffee House',
    category: 'Café',
    rating: 4.6,
    distance: '1.2 km',
    x: 35, // percentage coordinate on SVG map grid
    y: 40,
    openStatus: 'Open Now',
    aiTag: 'Great for studying',
    isCurrent: false,
  },
  {
    id: 2,
    name: 'Spice Route Fine Dining',
    category: 'Restaurant',
    rating: 4.5,
    distance: '2.1 km',
    x: 65,
    y: 25,
    openStatus: 'Open Now',
    aiTag: 'Popular for dinner',
    isCurrent: false,
  },
  {
    id: 3,
    name: 'KBR National Park',
    category: 'Park',
    rating: 4.8,
    distance: '0.8 km',
    x: 20,
    y: 70,
    openStatus: 'Open Now',
    aiTag: 'Peaceful green space',
    isCurrent: false,
  },
  {
    id: 4,
    name: 'Skyline Rooftop Lounge',
    category: 'Restaurant',
    rating: 4.4,
    distance: '2.8 km',
    x: 80,
    y: 60,
    openStatus: 'Open Now',
    aiTag: 'Great evening views',
    isCurrent: false,
  },
  {
    id: 5,
    name: 'Your Location',
    category: 'User',
    rating: null,
    distance: '0 km',
    x: 48,
    y: 52,
    openStatus: 'Active',
    isCurrent: true,
  },
];
