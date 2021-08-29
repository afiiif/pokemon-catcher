import clsx from 'clsx';
import PropTypes from 'prop-types';

export default function PokemonDetailPokeball({
  buttonLabel, handleThrowPokeball,
  isThrowingPokeball, isShowPokeballButton,
}) {
  return (
    <>
      <div className="pt-6">
        <button
          type="button"
          className="w-full rounded-full shadow-lg border px-2 py-4 text-center hover:bg-rose-50 md:w-44 md:pl-12 hover:text-rose-500 active:translate-y-1 disabled:pointer-events-none disabled:text-gray-400 md:disabled:w-52"
          onClick={handleThrowPokeball}
          disabled={isThrowingPokeball}
        >
          <div className="text-lg pl-4 pr-6">
            {buttonLabel}
          </div>
        </button>
      </div>
      <div className={clsx('pokeball-to-catch pointer-events-none', isThrowingPokeball && 'animated')}>
        <div className="relative">
          <div
            className={clsx(
              'pokeball-colored scale-50 -m-6 md:mt-10',
              isThrowingPokeball && 'animated',
              !isShowPokeballButton && 'back',
            )}
          >
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
    </>
  );
}

PokemonDetailPokeball.propTypes = {
  buttonLabel: PropTypes.string,
  handleThrowPokeball: PropTypes.func,
  isThrowingPokeball: PropTypes.bool,
  isShowPokeballButton: PropTypes.bool,
};
