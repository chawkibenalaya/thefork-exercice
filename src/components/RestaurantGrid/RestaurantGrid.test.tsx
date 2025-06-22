import { render, screen } from '@testing-library/react';
import RestaurantGrid from '@/components/RestaurantGrid';
import '@testing-library/jest-dom';
import { Restaurant } from '@/types/restaurant';

const mockRestaurants: Restaurant[] = [
    {
        id: '1',
        name: 'Chez Mario',
        photo: 'https://example.com/photo.jpg',
        address: {
            postalCode: '75001',
            country: 'France',
            street: '10 rue Mario',
            locality: 'Paris',
        },
        averagePrice: {
            value: 4500,
            currency: 'EUR',
        },
        aggregateRatings: {
            ratingValue: 9.5,
            reviewCount: 120,
        },
        bestOffer: '',
        slug: 'chez-mario',
    },
    {
        id: '2',
        name: 'Sushi Zen',
        photo: 'https://example.com/sushi.jpg',
        address: {
            postalCode: '75001',
            country: 'France',
            street: '20 avenue Tokyo',
            locality: 'Paris',
        },
        averagePrice: {
            value: 6000,
            currency: 'EUR',
        },
        aggregateRatings: {
            ratingValue: 8.8,
            reviewCount: 80,
        },
        bestOffer: '20%',
        slug: 'sushi-zen',
    },
];

jest.mock('next/image', () => (props: any) => {
    const { fill, ...rest } = props;
    return <img {...rest} alt={props.alt} />;
});

jest.mock('../RestaurantCard', () => (props: any) => {
    return <div data-testid="restaurant-card">{props.name}</div>;
});

describe('RestaurantGrid', () => {
    it('affiche toutes les cartes de restaurants', () => {
        render(<RestaurantGrid restaurants={mockRestaurants} />);
        const cards = screen.getAllByTestId('restaurant-card');
        expect(cards).toHaveLength(2);
        expect(screen.getByText('Chez Mario')).toBeInTheDocument();
        expect(screen.getByText('Sushi Zen')).toBeInTheDocument();
    });
});
