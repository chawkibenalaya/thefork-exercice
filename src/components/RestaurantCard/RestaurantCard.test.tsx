import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import RestaurantCard from '../RestaurantCard';
import { RestaurantCardProps } from '@/types/restaurant';

// Mock next/image
jest.mock('next/image', () => (props: any) => {
    const { fill, ...rest } = props;
  return <img {...rest} alt={props.alt} />;
});

// Mock RestaurantLink
jest.mock('../RestaurantLink', () => ({ children, restaurantID, restaurantSlug }: any) => (
  <a href={`/restaurant/${restaurantID}/${restaurantSlug}`}>{children}</a>
));


describe('RestaurantCard', () => {
  const mockData: RestaurantCardProps = {
    id: '123',
    slug: 'test-restaurant',
    name: 'Restaurant Chez Gladine',
    photo: '/mario.jpg',
    address: {
      street: '10 rue Gladine',
      locality: 'Paris',
    },
    averagePrice: {
      value: 45,
      currency: 'EUR',
    },
    aggregateRatings: {
      ratingValue: 9.1,
      reviewCount: 120,
    },
    bestOffer: '30%',
  };

  it('affiche les infos principales du restaurant', () => {
    render(<RestaurantCard {...mockData} />);
    expect(screen.getByRole('heading', { level: 3 })).toHaveTextContent('Chez Gladine');
    expect(screen.getByText('10 rue Gladine, Paris')).toBeInTheDocument();
    expect(screen.getByText('€ 45 average price')).toBeInTheDocument();
    expect(screen.getByText('9.1')).toBeInTheDocument();
    expect(screen.getByText('120')).toBeInTheDocument();
    expect(screen.getByRole('button')).toHaveTextContent('Book • Up to 30%');
  });

  it('affiche "Book" sans offre spéciale', () => {
    const dataWithoutOffer = { ...mockData, bestOffer: '' };
    render(<RestaurantCard {...dataWithoutOffer} />);
    expect(screen.getByRole('button')).toHaveTextContent('Book');
  });
});
