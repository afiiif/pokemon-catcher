import clsx from 'clsx';
import Image from 'next/image';
import PropTypes from 'prop-types';
import { useState } from 'react';
import { getPokemonImage } from '../../../helpers/pokemon';

export default function PokemonCardContainer({
  pokemon,
  className, header, children,
}) {
  const [isImageLoaded, setIsImageLoaded] = useState();

  const { id, name, types } = pokemon;
  const artwork = getPokemonImage(id);
  const type = types?.[0];

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
  }[type] || 'bg-gray-200';

  return (
    <div className={clsx('pokemon-card', bgColor, className)}>
      <div className="pokemon-card-pokeball">
        <div className={clsx(type ? 'pokeball' : 'pokeball-gray', !isImageLoaded && 'animate-spin-slow')}>
          <div /><div />
        </div>
      </div>
      {header}
      <div className={clsx('pokemon-card-content', type ? 'text-white' : 'text-gray-800')}>
        <h2 className="pokemon-card-heading">{name}</h2>
        <div className="flex justify-between -mt-3 text-sm">
          <div className="pokemon-card-body">
            {children}
          </div>
          <Image
            src={artwork}
            alt={name}
            width={128}
            height={128}
            quality={1}
            onLoadingComplete={() => setIsImageLoaded(true)}
            className="drop-shadow-md"
          />
        </div>
      </div>
    </div>
  );
}

PokemonCardContainer.propTypes = {
  pokemon: PropTypes.object,
  className: PropTypes.string,
  header: PropTypes.node,
  children: PropTypes.node,
};
