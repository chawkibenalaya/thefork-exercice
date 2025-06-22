import { GET_CITIES } from '@/graphql/api/queries/getCities'; 
import { createApolloClient } from '@/lib/apolloClient';
import { notFound } from 'next/navigation';

interface Params {
  params: {
    cityID: string;
  };
}

// SEO dynamique
export async function generateMetadata({ params }: Params) {
  const { cityID } = params;
  const client = createApolloClient();
  const { data } = await client.query({ query: GET_CITIES });

  const city = data.getCities.find((c: any) => c.id === cityID);

  return {
    title: city ? `${city.name} – TheFork` : 'Ville inconnue – TheFork',
    description: city
      ? `Découvrez les restaurants à ${city.name}.`
      : 'Ville introuvable.',
  };
}

// Page dynamique pour afficher les détails d'une ville
export default async function CityPage({ params }: Params) {
  const { cityID } = params;
  const client = createApolloClient();
  const { data } = await client.query({ query: GET_CITIES });

  const city = data.getCities.find((c: any) => c.id === cityID);

  if (!city) {
    notFound(); // 404 redirection si la ville n'existe pas
  }

  return (
    <div>
      <h1>{city.name}</h1>
      <img src={city.photo} alt={city.name} width={400} />
    </div>
  );
}
