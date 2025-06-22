/**
 * DO NOT EDIT
 */
import { ApolloServer } from '@apollo/server';
import { startServerAndCreateNextHandler } from '@as-integrations/next';
import { gql } from 'graphql-tag';

import DATA from './data.json';

const resolvers = {
  Query: {
    getCities: async () => {
      return DATA.cities;
    },
    getRestaurants: async (_: any, args: { cityID: string }) => {
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
    amount: Int
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
    offer: String
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

export default startServerAndCreateNextHandler(server);
