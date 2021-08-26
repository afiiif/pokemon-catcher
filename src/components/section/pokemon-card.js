import clsx from 'clsx';
import Image from 'next/image';
import PropTypes from 'prop-types';
import { useState } from 'react';
import { usePokemonStorage } from '../wrapper/pokemon-storage-context';

export default function PokemonCard({ pokemon }) {
  const [isImageLoaded, setIsImageLoaded] = useState();

  const { name, artwork } = pokemon;

  const { pokemonStorage } = usePokemonStorage();
  const ownedPokemons = pokemonStorage.filter((item) => item.name === name);
  const isOwned = ownedPokemons.length > 0;

  const { types } = ownedPokemons[0] || {};

  const bgColor = {
    normal: 'bg-[#a8a878]',
    fire: 'bg-red-500',
    water: 'bg-blue-400',
    grass: 'bg-green-500',
    electric: 'bg-yellow-400',
    ice: 'bg-[#98d8d8]',
    fighting: 'bg-red-600',
    poison: 'bg-[#aa5b9d]',
    ground: 'bg-[#e0c068]',
    flying: 'bg-[#a890f0]',
    psychic: 'bg-[#f85888]',
    bug: 'bg-lime-600',
    rock: 'bg-[#b8a038]',
    ghost: 'bg-[#7975d4]',
    dark: 'bg-[#5a504f]',
    dragon: 'bg-[#7038f8]',
    steel: 'bg-[#b8b8d0]',
    fairy: 'bg-[#ff76ab]',
  }[types?.[0]] || 'bg-gray-200';

  return (
    <div className={clsx('h-44 rounded-2xl relative overflow-hidden group', bgColor)}>
      <div className={clsx('p-4 relative z-20', isOwned ? 'text-white' : 'text-gray-800')}>
        <h2 className="font-bold text-xl capitalize">{name}</h2>
        <div className="flex justify-between -mt-3 text-sm">
          <div className="pt-6 flex flex-col justify-between items-start">
            <div title={isOwned ? undefined : 'Catch the pokémon to unlock'}>
              <div className="font-semibold">Type:</div>
              <div className="capitalize">
                {isOwned
                  ? types?.join(', ')
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
          <Image
            src={artwork}
            alt={name}
            width={128}
            height={128}
            quality={1}
            onLoadingComplete={() => setIsImageLoaded(true)}
          />
        </div>
      </div>
      <div className="absolute z-10 bottom-2 right-2 scale-[170%]">
        <div className={clsx(isOwned ? 'pokeball' : 'pokeball-gray', !isImageLoaded && 'animate-spin-slow')}>
          <div /><div />
        </div>
      </div>
    </div>
  );
}

PokemonCard.propTypes = {
  pokemon: PropTypes.object,
};
