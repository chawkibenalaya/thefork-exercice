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
      amount: number;
      currency: string;
    };
    aggregateRatings?: {
      ratingValue: number;
      reviewCount: number;
    };
    offer?: string;
    slug: string;
  }
  