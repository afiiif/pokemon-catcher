import PropTypes from 'prop-types';

export default function PokemonCardSkeleton({ times, isCompact }) {
  const defaultTimes = isCompact ? 24 : 12;

  return [...Array(times || defaultTimes).keys()].map((key) => (
    <div
      key={key}
      className="pokemon-card h-44 bg-gray-200"
    >
      <div className="pokemon-card-pokeball">
        <div className="pokeball-gray animate-spin-slow">
          <div /><div />
        </div>
      </div>
    </div>
  ));
}

PokemonCardSkeleton.propTypes = {
  times: PropTypes.number,
  isCompact: PropTypes.bool,
};
