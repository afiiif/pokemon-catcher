import client from '../graphql/client';
import { GET_POKEMON, GET_POKEMONS, GET_POKEMONS_NAME } from '../graphql/pokemon/queries';

export const getAllPokemonNames = () => (
  client.request(GET_POKEMONS_NAME)
);

export const getPokemons = ({ pageParam = 0 } = {}) => (
  client.request(GET_POKEMONS, {
    offset: pageParam,
    limit: pageParam ? 24 : 48,
  })
);

export const getPokemon = ({ queryKey } = {}) => {
  const [, name] = queryKey;
  return client.request(GET_POKEMON, {
    name,
  });
};
