export interface Restaurant {
    id: string;
    name: string;
    photo: string;
    address: {
      street: string;
      postalCode: string;
      locality: string;
      country: string;
    };
    averagePrice: {
      value: number;
      currency: string;
    };
    aggregateRatings?: {
      ratingValue: number;
      reviewCount: number;
    };
    bestOffer?: string;
    slug: string;
  }
  
  export interface RestaurantCardProps {
    name: string;
    photo: string;
    address: {
      street: string;
      locality: string;
    };
    averagePrice: {
      value: number;
      currency: string;
    };
    aggregateRatings?: {
      ratingValue: number;
      reviewCount: number;
    };
    bestOffer?: string;
    id: string;
    slug: string;
  }
  