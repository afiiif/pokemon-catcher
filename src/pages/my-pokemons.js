import DefaultLayout from '../components/layout/default-layout';
import PokemonOwnedCard from '../components/section/pokemon-card/pokemon-owned-card';
import { usePokemonStorage } from '../components/wrapper/pokemon-storage-context';

export default function MyPokemonsPage() {
  const { pokemonStorage } = usePokemonStorage();

  return (
    <DefaultLayout title="My Pokémons">
      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {pokemonStorage.map((pokemon) => (
          <PokemonOwnedCard key={pokemon.catchedAt} pokemon={pokemon} />
        ))}
      </div>
    </DefaultLayout>
  );
}
