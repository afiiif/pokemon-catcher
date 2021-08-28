import { format, formatDistance } from 'date-fns';
import PropTypes from 'prop-types';
import { FaCheckCircle, FaSignOutAlt } from 'react-icons/fa';
import PokemonCardContainer from './pokemon-card-container';

export default function PokemonOwnedCard({ pokemon, onClickRelease }) {
  const { types, nickname, catchedAt } = pokemon;
  const catchedAtDistance = formatDistance(new Date(catchedAt), new Date());
  const formattedCatchedAt = format(new Date(catchedAt), 'd MMM yyyy HH:mm');

  return (
    <PokemonCardContainer
      pokemon={pokemon}
      className="h-56"
      header={(
        <div className="h-12 mx-4 border-b flex items-center">
          <div className="border-white text-white truncate pr-8">{nickname}</div>
        </div>
      )}
    >
      <div className="h-full flex flex-col justify-between items-start">
        <div>
          <div className="font-semibold">Type:</div>
          <div className="capitalize">{types?.join(', ') || '-'}</div>
        </div>
        <div className="flex items-center text-xs text-white/80 -mr-28">
          <FaCheckCircle className="mr-px" />
          <div className="pl-1.5 first-letter:uppercase whitespace-nowrap" title={formattedCatchedAt}>{catchedAtDistance} ago</div>
        </div>
      </div>
      <div className="group">
        <button
          type="button"
          className="text-white text-2xl p-2 absolute top-1 right-1 m-px z-30"
          onClick={onClickRelease}
          title="Release"
        >
          <FaSignOutAlt />
        </button>
        <div className="pointer-events-none absolute inset-0 z-20 bg-black transition-opacity opacity-0 group-hover:opacity-20" />
      </div>
    </PokemonCardContainer>
  );
}

PokemonOwnedCard.propTypes = {
  pokemon: PropTypes.object,
  onClickRelease: PropTypes.func,
};
