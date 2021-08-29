import Link from 'next/link';
import PropTypes from 'prop-types';
import PokemonCard from './pokemon-card';

export default function PokemonCards({ pokemons = [], small }) {
  return (
    pokemons.map((pokemon) => {
      const href = `/pokemon/${encodeURIComponent(pokemon.name)}`;
      return (
        <Link href={href} key={pokemon.id}>
          <a className="block rounded-2xl">
            <PokemonCard pokemon={pokemon} small={small} />
          </a>
        </Link>
      );
    })
  );
}

PokemonCards.propTypes = {
  pokemons: PropTypes.arrayOf(PropTypes.object),
  small: PropTypes.bool,
};
