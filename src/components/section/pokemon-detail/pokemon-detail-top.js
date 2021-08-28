/* eslint-disable no-nested-ternary */
import clsx from 'clsx';
import Image from 'next/image';
import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form';
import useCatchPokemon from '../../../hooks/use-catch-pokemon';
import { capitalizeFirstLetter } from '../../../utils/string';
import Modal from '../../common/modal';
import { usePokemonStorage } from '../../wrapper/pokemon-storage-context';
import PokemonDetailTypes from './pokemon-detail-types';

export default function PokemonDetailTop({ pokemon }) {
  const { id, name, types } = pokemon;
  const artwork = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`;

  const { register, handleSubmit } = useForm();

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
      <div className="pt-6">
        <button
          type="button"
          className="w-full rounded-full shadow-lg border px-2 py-4 text-center hover:bg-blue-50 md:w-44 md:pl-12 hover:text-blue-500 active:translate-y-1 disabled:pointer-events-none disabled:text-gray-400 md:disabled:w-52"
          onClick={handleThrowPokeball}
          disabled={isThrowingPokeball}
        >
          <div className="text-lg pl-4 pr-6">
            {isThrowingPokeball
              ? (modalProps.isOpen ? 'Caught!' : 'Catching...')
              : 'Catch!'}
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
      <Modal
        {...modalProps}
      >
        <div className="text-center">
          <h2 className="font-bold text-gray-900">{capitalizeFirstLetter(name)} Caught!</h2>
          <div className="mx-auto max-w-[200px]">
            <Image
              src={artwork}
              alt={name}
              width={768}
              height={768}
              quality={1}
              className="drop-shadow-md"
            />
          </div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <label htmlFor="nickname" className="block pb-1">Give a nickname?</label>
            <input type="text" id="nickname" className="input-text w-52" maxLength="24" {...register('nickname')} />
            <div className="flex justify-center pt-6 space-x-2">
              <button type="button" className="btn-secondary w-24" onClick={closeModal}>Release</button>
              <button type="submit" className="btn-primary w-24">Save</button>
            </div>
          </form>
        </div>
      </Modal>
    </section>
  );
}

PokemonDetailTop.propTypes = {
  pokemon: PropTypes.object,
};
