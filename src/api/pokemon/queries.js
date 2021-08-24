import { gql } from 'graphql-request';
import { client } from '../../utils/graphql';

export const getPokemons = ({ pageParam = 0 }) => (
  client.request(
    gql`
      query pokemons($offset: Int) {
        pokemons(limit: 12, offset: $offset) {
          nextOffset
          results {
            id
            name
            image
          }
        }
      }
    `,
    {
      offset: pageParam,
    },
  )
);

export const getPokemon = ({ queryKey }) => {
  const [, { name }] = queryKey;
  client.request(
    gql`
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
    `,
    {
      name,
    },
  );
};
