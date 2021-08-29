import clsx from 'clsx';
import PropTypes from 'prop-types';

export default function PokemonCardSkeleton({ times, isCompact }) {
  const defaultTimes = isCompact ? 24 : 12;

  return [...Array(times || defaultTimes).keys()].map((key) => (
    <div
      key={key}
      className={clsx(
        'rounded-2xl relative overflow-hidden group bg-gray-200',
        isCompact ? 'h-28' : 'h-44',
      )}
    >
      <div
        className={clsx(
          'absolute z-10',
          isCompact
            ? 'scale-[120%] -right-2 -bottom-2'
            : 'scale-[170%] right-2 bottom-2',
        )}
      >
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
