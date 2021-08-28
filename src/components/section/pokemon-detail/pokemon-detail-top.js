import clsx from 'clsx';
import Image from 'next/image';
import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { capitalizeFirstLetter } from '../../../utils/string';
import PokemonDetailTypes from './pokemon-detail-types';

export default function PokemonDetailTop({ pokemon }) {
  const { id, name, types } = pokemon;
  const artwork = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`;

  const [isShowPokeballButton, setIsShowPokeballButton] = useState(true);
  const [isThrowingPokeball, setIsThrowingPokeball] = useState(false);

  const handleThrowPokeball = () => {
    setIsThrowingPokeball(true);
  };

  useEffect(() => {
    let timeoutSpin;
    let timeoutThrow;
    if (isThrowingPokeball) {
      timeoutSpin = setTimeout(() => {
        setIsShowPokeballButton(false);
      }, 1800);
      timeoutThrow = setTimeout(() => {
        setIsThrowingPokeball(false);
        setIsShowPokeballButton(true);
      }, 5600);
    }
    return () => {
      clearTimeout(timeoutSpin);
      clearTimeout(timeoutThrow);
    };
  }, [isThrowingPokeball]);

  return (
    <section className="relative md:pt-4">
      <div className="md:flex md:flex-row-reverse md:justify-between">
        <div className={clsx('w-64 md:w-96 mx-auto md:mr-8', !isShowPokeballButton && 'pokemon-shrinking')}>
          <Image
            src={artwork}
            alt={name}
            width={768}
            height={768}
            quality={1}
            className="drop-shadow-md"
          />
        </div>
        <div>
          <h1 className="text-3xl md:text-6xl font-bold text-gray-900 text-center md:text-left md:pt-4">
            {capitalizeFirstLetter(pokemon.name)}
          </h1>
          <div className="flex justify-center md:justify-start pt-3 md:pt-6">
            <PokemonDetailTypes types={types} />
          </div>
        </div>
      </div>
      <div className="pt-6">
        <button
          type="button"
          className="w-full rounded-full shadow-lg border px-2 py-4 text-center hover:bg-blue-50 md:w-44 md:pl-12 hover:text-blue-500 active:translate-y-1 disabled:pointer-events-none disabled:text-gray-400 md:disabled:w-52"
          onClick={handleThrowPokeball}
          disabled={isThrowingPokeball}
        >
          <div className="text-lg pl-4 pr-6">
            {isThrowingPokeball ? 'Catching...' : 'Catch!'}
          </div>
        </button>
      </div>
      <div className={clsx('pokeball-to-catch', isThrowingPokeball && 'animated')}>
        <div className="relative">
          <div className={clsx('pokeball-colored scale-50 -m-6 md:mt-10', isThrowingPokeball && 'animated', !isShowPokeballButton && 'back')}>
            <div /><div />
          </div>
          <div className="absolute inset-0 flex items-center justify-center overflow-visible">
            {isThrowingPokeball && (
              <>
                <div className="pokeball-explosion" />
                <div className="pokeball-explosion" />
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

PokemonDetailTop.propTypes = {
  pokemon: PropTypes.object,
};
