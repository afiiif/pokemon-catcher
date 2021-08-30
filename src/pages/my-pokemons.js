import Link from 'next/link';
import DefaultLayout from '../components/layout/default-layout';
import PokemonOwnedCard from '../components/section/pokemon-card/pokemon-owned-card';
import PokemonReleaseConfirmationModal from '../components/section/pokemon-card/pokemon-release-confirmation-modal';
import { usePokemonStorage } from '../components/wrapper/pokemon-storage-context';
import useModal from '../hooks/use-modal';

export default function MyPokemonsPage() {
  const { pokemonStorage } = usePokemonStorage();

  const modal = useModal();

  return (
    <DefaultLayout title="My Pokémons">
      {pokemonStorage.length
        ? (
          <div className="pokemon-card-container">
            {pokemonStorage.map((pokemon) => (
              <PokemonOwnedCard
                key={pokemon.catchedAt}
                pokemon={pokemon}
                onClickRelease={() => modal.open(pokemon)}
              />
            ))}
            <PokemonReleaseConfirmationModal
              {...modal.props}
              pokemon={modal.data}
            />
          </div>
        )
        : (
          <div className="flex h-96 my-12 md:my-24">
            <div className="m-auto">
              <div className="pokeball-gray scale-[180%] mx-auto m-16">
                <div /><div />
              </div>
              <div className="text-center">
                <p className="text-gray-600">You don't have any pokémon yet.</p>
                <Link href="/">
                  <a className="inline-block btn-primary mt-6">Explore Pokémon</a>
                </Link>
              </div>
            </div>
          </div>
        )}
    </DefaultLayout>
  );
}
