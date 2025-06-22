import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import CityGridSection from './index';
import { City } from '@/types/city';

jest.mock('@/components/CityCard', () => ({ name, photo, id }: City) => (
  <div data-testid="city-card">{name}</div>
));

describe('CityGridSection', () => {
  const mockCities: City[] = [
    { id: '1', name: 'Paris', photo: '/paris.jpg' },
    { id: '2', name: 'Lyon', photo: '/lyon.jpg' },
    { id: '3', name: 'Marseille', photo: '/marseille.jpg' },
  ];

  it('affiche le nom de la ville sélectionnée', () => {
    render(<CityGridSection cities={mockCities} selectedCity={mockCities[0]} />);
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Paris');
  });

  it('affiche les CityCard des autres villes', () => {
    render(<CityGridSection cities={mockCities} selectedCity={mockCities[0]} />);
    const cards = screen.getAllByTestId('city-card');
    expect(cards).toHaveLength(2); // Paris est exclue
    expect(cards[0]).toHaveTextContent('Lyon');
    expect(cards[1]).toHaveTextContent('Marseille');
  });

  it('toggle Collapse/Expand au clic', () => {
    render(<CityGridSection cities={mockCities} selectedCity={mockCities[0]} />);
    const button = screen.getByRole('button');

    expect(button).toHaveTextContent('Collapse');
    fireEvent.click(button);
    expect(button).toHaveTextContent('Expand');
  });
});
