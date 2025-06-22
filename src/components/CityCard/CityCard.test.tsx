import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import CityCard from './index';

describe('CityCard Component', () => {
  const mockProps = {
    name: 'Paris',
    photo: '/paris.jpg',
    id: '1',
  };

  it('renders the city name', () => {
    render(<CityCard {...mockProps} />);

    const cityName = screen.getByText('Paris');
    expect(cityName).toBeInTheDocument();
  });

  it('renders the city image', () => {
    render(<CityCard {...mockProps} />);

    const cityImage = screen.getByAltText('Paris');
    expect(cityImage).toBeInTheDocument();
  });

  it('links to the correct city page', () => {
    render(<CityCard {...mockProps} />);

    const link = screen.getByRole('link');
    expect(link).toHaveAttribute('href', '/city/1');
  });
});