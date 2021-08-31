import { format, formatDistance } from 'date-fns';
import Link from 'next/link';
import PropTypes from 'prop-types';
import { FaCheckCircle, FaInfoCircle, FaSignOutAlt } from 'react-icons/fa';
import PokemonCardContainer from './pokemon-card-container';

export default function PokemonOwnedCard({ pokemon, onClickRelease }) {
  const { name, types, nickname, catchedAt } = pokemon;
  const catchedAtDistance = formatDistance(new Date(catchedAt), new Date());
  const formattedCatchedAt = format(new Date(catchedAt), 'd MMM yyyy HH:mm');

  return (
    <PokemonCardContainer
      pokemon={pokemon}
      className="h-56"
      header={(
        <div className="h-12 mx-4 border-b flex items-center pr-7">
          <div className="border-white text-white truncate flex-1">{nickname}</div>
          <Link href={`/pokemon/${name}`}>
            <a className="text-white text-xl p-2" title="View Pokémon Detail">
              <FaInfoCircle />
            </a>
          </Link>
          <div className="group">
            <button
              type="button"
              className="text-white text-xl p-2 absolute top-1.5 right-1.5 z-30"
              onClick={onClickRelease}
              title="Release"
            >
              <FaSignOutAlt />
            </button>
            <div className="pointer-events-none absolute inset-0 z-20 bg-black transition-opacity opacity-0 group-hover:opacity-20" />
          </div>
        </div>
      )}
    >
      <div className="font-semibold">Type:</div>
      <div className="capitalize">{types?.join(', ') || '-'}</div>
      <div className="mt-auto flex items-center text-xs text-white/80 -mr-28">
        <FaCheckCircle className="mr-px" />
        <div className="pl-1.5 first-letter:uppercase whitespace-nowrap" title={formattedCatchedAt}>{catchedAtDistance} ago</div>
      </div>
    </PokemonCardContainer>
  );
}

PokemonOwnedCard.propTypes = {
  pokemon: PropTypes.object,
  onClickRelease: PropTypes.func,
};
