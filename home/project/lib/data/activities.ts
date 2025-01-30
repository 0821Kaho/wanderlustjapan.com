import { Activity } from '../types';

export const ACTIVITIES_DATA: Record<string, Activity[]> = {
  "mount-fuji": [
    {
      id: "fuji-climb",
      name: "Mount Fuji Climb",
      description: "Guided climb to the summit of Mount Fuji with experienced mountaineers.",
      image: "https://images.unsplash.com/photo-1490806843957-31f4c9a91c65?w=800&auto=format&fit=crop",
      price: { amount: 15000, currency: "JPY" },
      duration: "8 hours",
      bookingUrl: "https://example.com/book",
      helpUrl: "https://wa.me/1234567890"
    },
    {
      id: "fuji-photography",
      name: "Sunrise Photography Tour",
      description: "Capture stunning sunrise views of Mount Fuji with a professional photographer.",
      image: "https://images.unsplash.com/photo-1578637387939-43c525550085?w=800&auto=format&fit=crop",
      price: { amount: 12000, currency: "JPY" },
      duration: "4 hours",
      bookingUrl: "https://example.com/book",
      helpUrl: "https://wa.me/1234567890"
    }
  ],
  "mount-takao": [
    {
      id: "takao-guided-hike",
      name: "Guided Hiking Tour",
      description: "Expert-led hiking tour of Mount Takao with cultural insights and scenic viewpoints.",
      image: "https://images.unsplash.com/photo-1551632811-561732d1e306?w=800&auto=format&fit=crop",
      price: { amount: 5000, currency: "JPY" },
      duration: "4 hours",
      bookingUrl: "https://example.com/book",
      helpUrl: "https://wa.me/1234567890"
    },
    {
      id: "takao-temple-tour",
      name: "Temple & Nature Tour",
      description: "Visit Yakuo-in Temple and learn about Mount Takao's religious significance.",
      image: "https://images.unsplash.com/photo-1478436127897-769e1b3f0f36?w=800&auto=format&fit=crop",
      price: { amount: 6000, currency: "JPY" },
      duration: "3 hours",
      bookingUrl: "https://example.com/book",
      helpUrl: "https://wa.me/1234567890"
    }
  ],
  "sensoji-asakusa": [
    {
      id: "sensoji-guided-tour",
      name: "Sensoji Temple Tour",
      description: "Guided tour of Tokyo's oldest Buddhist temple with historical insights.",
      image: "https://images.unsplash.com/photo-1583067595935-4606dc298729?w=800&auto=format&fit=crop",
      price: { amount: 4000, currency: "JPY" },
      duration: "2 hours",
      bookingUrl: "https://example.com/book",
      helpUrl: "https://wa.me/1234567890"
    },
    {
      id: "asakusa-food-tour",
      name: "Asakusa Food Tour",
      description: "Sample traditional Japanese snacks along Nakamise Shopping Street.",
      image: "https://images.unsplash.com/photo-1535189043414-47a3c49a0bed?w=800&auto=format&fit=crop",
      price: { amount: 8000, currency: "JPY" },
      duration: "3 hours",
      bookingUrl: "https://example.com/book",
      helpUrl: "https://wa.me/1234567890"
    }
  ]
};