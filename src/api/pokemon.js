import client from '../graphql/client';
import { GET_POKEMON, GET_POKEMONS } from '../graphql/pokemon/queries';

export const getPokemons = ({ queryKey: [, offset] = [], pageParam = 0 } = {}) => (
  client.request(GET_POKEMONS, {
    offset: Math.max(offset, pageParam),
    limit: 24,
  })
);

export const getPokemon = ({ queryKey } = {}) => {
  const [, name] = queryKey;
  return client.request(GET_POKEMON, {
    name,
  });
};
