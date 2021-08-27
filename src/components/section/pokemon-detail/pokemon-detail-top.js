import Image from 'next/image';
import PropTypes from 'prop-types';
import { capitalizeFirstLetter } from '../../../utils/string';
import PokemonDetailTypes from './pokemon-detail-types';

export default function PokemonDetailTop({ pokemon }) {
  const { id, name, types } = pokemon;
  const artwork = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`;

  return (
    <section className="relative md:pt-4">
      <div className="md:flex md:flex-row-reverse md:justify-between">
        <div className="w-64 md:w-96 mx-auto md:mr-8">
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
      <div className="pt-6 md:-mt-16">
        <button
          type="button"
          className="w-full rounded-full shadow-lg border px-2 py-4 text-center hover:bg-blue-50 md:w-44 md:pl-12"
        >
          <div className="text-lg pl-4 pr-6">Catch!</div>
        </button>
      </div>
      <div className="pokeball-to-catch">
        <div className="pokeball-colored animated scale-50 -m-6">
          <div /><div />
        </div>
      </div>
    </section>
  );
}

PokemonDetailTop.propTypes = {
  pokemon: PropTypes.object,
};
