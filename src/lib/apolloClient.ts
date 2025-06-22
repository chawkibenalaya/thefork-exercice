import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client';

export function createApolloClient() {
  return new ApolloClient({
    ssrMode: typeof window === 'undefined',
    link: new HttpLink({
      uri: 'http://localhost:3000/api/graphql',
      // plus besoin de cross-fetch pour node > 18
    }),
    cache: new InMemoryCache(),
  });
}
