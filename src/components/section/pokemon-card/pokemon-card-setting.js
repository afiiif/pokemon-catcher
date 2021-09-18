import clsx from 'clsx';
import PropTypes from 'prop-types';
import { FaTh, FaThLarge } from 'react-icons/fa';
import { POKEMON_GENERATIONS } from '../../../constants/pokemon';

export default function PokemonCardSetting({
  offset, setOffset,
  isCompact, setIsCompact,
}) {
  return (
    <div className="flex items-center pb-6 text-rose-500">

      <label htmlFor="pokemon-gen">Jump to:</label>
      <select
        name="pokemon-gen"
        id="pokemon-gen"
        className="border border-rose-500 ml-1.5 px-1.5 py-0.5 rounded"
        onChange={({ target }) => setOffset(Number(target.value))}
        value={offset}
      >
        {POKEMON_GENERATIONS.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>

      <button
        type="button"
        onClick={() => setIsCompact(false)}
        title="Default"
        className={clsx(
          'p-2.5 text-lg border border-rose-500 rounded-l ml-auto',
          !isCompact && 'bg-rose-500 text-white',
        )}
      >
        <FaThLarge />
      </button>
      <button
        type="button"
        onClick={() => setIsCompact(true)}
        title="Compact"
        className={clsx(
          'p-2.5 text-lg border border-rose-500 rounded-r -ml-px',
          isCompact && 'bg-rose-500 text-white',
        )}
      >
        <FaTh />
      </button>

    </div>
  );
}

PokemonCardSetting.propTypes = {
  offset: PropTypes.number,
  setOffset: PropTypes.func.isRequired,
  isCompact: PropTypes.bool,
  setIsCompact: PropTypes.func.isRequired,
};
