import { notFound } from 'next/navigation';
import { createApolloClient } from '@/lib/apolloClient';
import { GET_RESTAURANTS_BY_CITY } from '@/pages/api/queries/getRestaurantsByCity';
import { GET_CITIES } from '@/pages/api/queries/getCities';
import RestaurantsGrid from '@/components/RestaurantGrid';
import CityGridSection from '@/components/CityGrid';
import { City } from '@/types/city';
import { Restaurant } from '@/types/restaurant';

interface Params {
  params: {
    cityID: string;
  };
}

interface GetCitiesResponse {
  getCities: City[];
}

interface GetRestaurantsResponse {
  getRestaurants: Restaurant[];
}

export async function generateMetadata({ params }: Params) {
  const { cityID } = await params;

  const client = createApolloClient();
  const { data } = await client.query<GetCitiesResponse>({ query: GET_CITIES });
  const city = data.getCities.find((c) => c.id === cityID);

  return {
    title: city ? `${city.name} – TheFork` : 'Ville inconnue – TheFork',
    description: city
      ? `Découvrez les restaurants à ${city.name}.`
      : 'Ville introuvable.',
  };
}

export default async function CityPage({ params }: Params) {
  const { cityID } = await params;

  const client = createApolloClient();

  const [cityData, restaurantsData] = await Promise.all([
    client.query<GetCitiesResponse>({ query: GET_CITIES }),
    client.query<GetRestaurantsResponse>({
      query: GET_RESTAURANTS_BY_CITY,
      variables: { cityID },
    }),
  ]);

  const cities = cityData.data.getCities;
  const city = cities.find((c) => c.id === cityID);
  const restaurants = restaurantsData.data.getRestaurants;
  if (!city) notFound();
  return (
    <div>
      <CityGridSection cities={cities} selectedCity={city} />
      <h2>Restaurants in {city.name}</h2>
      <RestaurantsGrid restaurants={restaurants} />
    </div>
  );
}
