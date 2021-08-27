import clsx from 'clsx';
import PropTypes from 'prop-types';

export default function PokemonDetailTypes({ types }) {
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
  };

  return (
    <div className="flex flex-wrap -m-1">
      {types.map(({ type }) => (
        <div
          key={type.name}
          className={clsx(
            'rounded-full text-white font-semibold capitalize px-3 py-1 m-1',
            bgColor[type.name],
          )}
        >
          {type.name}
        </div>
      ))}
    </div>
  );
}

PokemonDetailTypes.propTypes = {
  types: PropTypes.arrayOf(PropTypes.object),
};
