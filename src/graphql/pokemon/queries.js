import { gql } from 'graphql-request';

export const GET_POKEMONS = gql`
  query pokemons($offset: Int, $limit: Int = 24) {
    pokemons(offset: $offset, limit: $limit) {
      nextOffset
      results {
        id
        name
        artwork
      }
    }
  }
`;

export const GET_POKEMON = gql`
  query pokemon($name: String!) {
    pokemon(name: $name) {
      status
      id
      name
      height
      weight
      types {
        type {
          name
        }
      }
      moves {
        move {
          name
        }
      }
      stats {
        base_stat
        stat {
          name
        }
      }
    }
  }
`;
