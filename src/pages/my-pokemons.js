import Link from 'next/link';
import DefaultLayout from '../components/layout/default-layout';
import { usePokemonStorage } from '../components/wrapper/pokemon-storage-context';

export default function MyPokemonsPage() {
  const { pokemonStorage } = usePokemonStorage();

  return (
    <DefaultLayout title="My Pokémons">
      {pokemonStorage.map(({ id, pokemon }) => {
        const href = `/pokemon/${encodeURIComponent(pokemon.name)}`;
        return (
          <Link href={href} key={id}>
            <a className="block border p-3 mb-2 bg-gray-100 hover:bg-gray-300">{pokemon.name}</a>
          </Link>
        );
      })}
    </DefaultLayout>
  );
}
