import PropTypes from 'prop-types';
import { usePokemonStorage } from '../../wrapper/pokemon-storage-context';
import PokemonCardContainer from './pokemon-card-container';

export default function PokemonCard({ pokemon }) {
  const { pokemonStorage } = usePokemonStorage();
  const ownedPokemons = pokemonStorage.filter((item) => item.id === pokemon.id);
  const isOwned = ownedPokemons.length > 0;
  const mergedPokemonData = { ...pokemon, ...ownedPokemons[0] };

  return (
    <PokemonCardContainer pokemon={mergedPokemonData} className="h-44 group">
      <div className="h-full flex flex-col justify-between items-start">
        <div>
          <div className="font-semibold">Type:</div>
          <div className="capitalize">
            {isOwned
              ? mergedPokemonData.types?.join(', ')
              : (
                <div className="h-5 overflow-hidden">
                  <div className="text-gray-500 mt-0 group-hover:-mt-5 transition-all">Unknown</div>
                  <div className="text-red-500">Catch to unlock</div>
                </div>
              )}
          </div>
        </div>
        <div className="bg-white/60 px-2.5 py-1 rounded-full font-semibold text-gray-700">
          Owned: {ownedPokemons.length}
        </div>
      </div>
    </PokemonCardContainer>
  );
}

PokemonCard.propTypes = {
  pokemon: PropTypes.object,
};
