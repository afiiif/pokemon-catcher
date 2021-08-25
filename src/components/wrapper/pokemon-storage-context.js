import PropTypes from 'prop-types';
import { createContext, useContext, useEffect, useState } from 'react';
import { getLocalStorage, setLocalStorage } from '../../utils/web-storage';

const PokemonStorageContext = createContext();

export const usePokemonStorage = () => useContext(PokemonStorageContext);

export default function PokemonStorageProvider({ children }) {
  const [pokemonStorage, setPokemonStorage] = useState([]);

  useEffect(() => {
    setPokemonStorage(getLocalStorage('pokemons') || []);
  }, []);

  const updatePokemon = (pokemons) => {
    setPokemonStorage(pokemons);
    setLocalStorage('pokemons', pokemons);
  };

  const addPokemon = (pokemon, name) => {
    const newPokemon = { pokemon, id: Date.now(), name };
    updatePokemon([...pokemonStorage, newPokemon]);
  };

  const releasePokemon = (id) => {
    updatePokemon(pokemonStorage.filter((pokemon) => pokemon.id !== id));
  };

  const releaseAllPokemon = () => {
    updatePokemon([]);
  };

  return (
    <PokemonStorageContext.Provider
      value={{
        pokemonStorage,
        addPokemon,
        releasePokemon,
        releaseAllPokemon,
      }}
    >
      {children}
    </PokemonStorageContext.Provider>
  );
}

PokemonStorageProvider.propTypes = {
  children: PropTypes.node,
};
