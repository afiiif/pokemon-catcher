/* eslint-disable no-nested-ternary */
import clsx from 'clsx';
import Image from 'next/image';
import PropTypes from 'prop-types';
import useCatchPokemon from '../../../hooks/use-catch-pokemon';
import { capitalizeFirstLetter } from '../../../utils/string';
import { usePokemonStorage } from '../../wrapper/pokemon-storage-context';
import PokemonDetailModal from './pokemon-detail-modal';
import PokemonDetailPokeball from './pokemon-detail-pokeball';
import PokemonDetailTypes from './pokemon-detail-types';

export default function PokemonDetailTop({ pokemon }) {
  const { id, name, types } = pokemon;
  const artwork = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`;

  const { addPokemon } = usePokemonStorage();

  const {
    isThrowingPokeball, isShowPokeballButton,
    modalProps, closeModal,
    handleThrowPokeball,
  } = useCatchPokemon();

  const onSubmit = ({ nickname }) => {
    closeModal();
    addPokemon(pokemon, nickname);
  };

  return (
    <section className="relative md:pt-4">
      <div className="md:flex md:flex-row-reverse md:justify-between">
        <div
          key={isThrowingPokeball}
          className={clsx(
            'w-64 md:w-96 mx-auto md:mr-8',
            !isShowPokeballButton && 'pokemon-shrinking',
            isThrowingPokeball === false && 'pokemon-get-out',
          )}
        >
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
      <PokemonDetailPokeball
        buttonLabel={isThrowingPokeball
          ? (modalProps.isOpen ? 'Caught!' : 'Catching...')
          : 'Catch!'}
        handleThrowPokeball={handleThrowPokeball}
        isThrowingPokeball={isThrowingPokeball}
        isShowPokeballButton={isShowPokeballButton}
      />
      <PokemonDetailModal
        pokemon={pokemon}
        onSubmit={onSubmit}
        {...modalProps}
      />
    </section>
  );
}

PokemonDetailTop.propTypes = {
  pokemon: PropTypes.object,
};
