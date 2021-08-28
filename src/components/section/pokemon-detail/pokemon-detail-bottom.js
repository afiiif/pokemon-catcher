/* eslint-disable camelcase */
import PropTypes from 'prop-types';
import { getStatLabel } from '../../../helpers/pokemon';
import { usePokemonStorage } from '../../wrapper/pokemon-storage-context';

function ListItem({ label, value }) {
  return (
    <div className="flex pt-2">
      <div className="text-gray-500 w-28 md:w-32">{label}</div>
      <div className="flex-1">{value}</div>
    </div>
  );
}

ListItem.propTypes = {
  label: PropTypes.string,
  value: PropTypes.node,
};

export default function PokemonDetailBottom({ pokemon }) {
  const { height, weight, stats, moves } = pokemon;

  const { pokemonStorage } = usePokemonStorage();
  const ownedPokemons = pokemonStorage.filter((item) => item.id === pokemon.id);

  return (
    <div className="pt-12">
      <section className="card">
        <h2 className="h2 md:pb-2">Basic Information</h2>
        <ListItem
          label="Owned"
          value={ownedPokemons.length}
        />
        <ListItem
          label="Height"
          value={`${height}"`}
        />
        <ListItem
          label="Weight"
          value={`${weight} lbs`}
        />
      </section>
      <section className="card">
        <h2 className="h2 md:pb-2">Base Stats</h2>
        {stats.map(({ stat, base_stat }) => (
          <ListItem
            label={getStatLabel(stat.name)}
            value={(
              <div className="flex">
                <div className="w-10">{base_stat}</div>
                <div className="flex-1 bg-gray-200 h-2 mt-3 rounded-full overflow-hidden">
                  <div className="bg-green-500 h-full" style={{ width: `${base_stat / 2.55}%` }} />
                </div>
              </div>
            )}
          />
        ))}
      </section>
      <section className="card mb-16">
        <h2 className="h2 md:pb-2">Moves</h2>
        <div className="flex flex-wrap -m-1 pt-2">
          {moves.map(({ move }) => (
            <div key={move.name} className="border border-gray-500 rounded-full px-2.5 py-1 m-1">
              {move.name}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

PokemonDetailBottom.propTypes = {
  pokemon: PropTypes.object,
};
