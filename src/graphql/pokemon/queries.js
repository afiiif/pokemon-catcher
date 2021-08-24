import { gql } from 'graphql-request';

export const GET_POKEMONS = gql`
  query pokemons($offset: Int, $limit: Int = 12) {
    pokemons(offset: $offset, limit: $limit) {
      nextOffset
      results {
        id
        name
        image
      }
    }
  }
`;

export const GET_POKEMONS_NAME = gql`
  query {
    pokemons(limit: 99999, offset: 0) {
      results {
        name
      }
    }
  }
`;

export const GET_POKEMON = gql`
  query pokemon($name: String!) {
    pokemon(name: $name) {
      id
      name
      sprites {
        front_default
        back_default
      }
    }
  }
`;
