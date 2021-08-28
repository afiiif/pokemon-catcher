import PropTypes from 'prop-types';

export default function PokemonCardSkeleton({ times = 12 }) {
  return [...Array(times).keys()].map((key) => (
    <div key={key} className="h-44 rounded-2xl relative overflow-hidden group bg-gray-200">
      <div className="absolute z-10 bottom-2 right-2 scale-[170%]">
        <div className="pokeball-gray animate-spin-slow">
          <div /><div />
        </div>
      </div>
    </div>
  ));
}

PokemonCardSkeleton.propTypes = {
  times: PropTypes.number,
};
