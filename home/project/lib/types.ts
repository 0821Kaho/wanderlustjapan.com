export type Region = {
  id: string;
  name: string;
  base: string;
  description: string;
  thumbnail: string;
  dayTrips: string[];
};

export type Category = {
  id: string;
  name: string;
  icon: string;
};

export type Subcategory = {
  id: string;
  name: string;
};

export type Place = {
  id: string;
  name: string;
  description: string;
  image: string;
  mapLink: string;
  region: string;
  category: string;
  subCategory: string;
  externalBookingUrl?: string; // Optional external booking URL
};

export type Activity = {
  id: string;
  name: string;
  description: string;
  image: string;
  price: {
    amount: number;
    currency: string;
  };
  duration: string;
  bookingUrl: string;
  helpUrl: string;
};