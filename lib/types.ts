// /lib/types.ts

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
  mapLink?: string;
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

  /** 
   * 新たに追加：このアクティビティが所属する place のID。
   * Activity データで直接 place を参照したい場合に使用する。 
   * ない場合は省略可能。
   */
  placeId?: string;
};
