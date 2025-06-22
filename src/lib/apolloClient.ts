import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client';

export function createApolloClient() {
  const isServer = typeof window === 'undefined';

  return new ApolloClient({
    ssrMode: isServer,
    link: new HttpLink({
      uri: isServer
        ? 'http://localhost:3000/api/graphql' // Pour dev local
        : '/api/graphql', // Pour client navigateur (relatif)
    }),
    cache: new InMemoryCache(),
  });
}
