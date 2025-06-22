import { gql } from '@apollo/client';

export const GET_RESTAURANTS_BY_CITY = gql`
  query GetRestaurantsByCity($cityID: ID!) {
    getRestaurants(cityID: $cityID) {
      id
      name
      slug
      photo
      address {
        street
        postalCode
        locality
        country
      }
      averagePrice {
        amount
        currency
      }
      aggregateRatings {
        ratingValue
        reviewCount
      }
      offer
    }
  }
`;
