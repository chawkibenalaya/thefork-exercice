// app/api/graphql/route.ts
import { ApolloServer } from '@apollo/server';
import { startServerAndCreateNextHandler } from '@as-integrations/next';
import { gql } from 'graphql-tag';
import DATA from './data.json';
import { NextRequest } from 'next/server';

console.log('[GraphQL] Loading...');

// LOG LES ERREURS GLOBALES
process.on('uncaughtException', (err) => {
  console.error('[GraphQL] Uncaught Exception:', err);
});
process.on('unhandledRejection', (reason) => {
  console.error('[GraphQL] Unhandled Rejection:', reason);
});


const resolvers = {
  Query: {
    getCities: async () => {
      return DATA.cities;
    },
    getRestaurants: async (_: any, args: { cityID: string }) => {
      console.log('[getRestaurants] found =', args);
      
      const cityRestaurants = DATA.restaurantsByCities.find((results) => {
        return results.cityId === Number(args.cityID);
      });
      return cityRestaurants?.restaurants || [];
    },
  },
};

const typeDefs = gql`
  type City {
    id: ID!
    name: String!
    photo: String!
  }

  type RestaurantAddress {
    street: String!
    postalCode: String
    locality: String!
    country: String!
  }

  type RestaurantAggregateRatings {
    ratingValue: Float!
    reviewCount: Int!
  }

  type RestaurantAveragePrice {
    value: Int!
    currency: String!
  }

  type Restaurant {
    id: ID!
    slug: String!
    name: String!
    photo: String!
    address: RestaurantAddress!
    averagePrice: RestaurantAveragePrice!
    aggregateRatings: RestaurantAggregateRatings
    bestOffer: String
  }

  type Query {
    getCities: [City!]!
    getRestaurants(cityID: ID!): [Restaurant!]!
  }
`;

const server = new ApolloServer({
  resolvers,
  typeDefs,
});

const handler = startServerAndCreateNextHandler<NextRequest>(server, {
  context: async () => ({}),
});

export { handler as GET, handler as POST };
