import DefaultLayout from '../components/layout/default-layout';
import Error from '../components/section/error';
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
          <Error
            message="You don't have any pokémon yet."
            button={{ label: 'Explore Pokémon' }}
          />
        )}
    </DefaultLayout>
  );
}
