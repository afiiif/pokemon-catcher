import { useRouter } from 'next/dist/client/router';
import PropTypes from 'prop-types';
import { useQuery } from 'react-query';
import { getAllPokemonNames, getPokemon } from '../../api/pokemon';

export default function PokemonDetailPage({ initialPokemon }) {
  const { query } = useRouter();

  const queryPokemon = useQuery(['pokemon', query.pokemonName], getPokemon, {
    initialData: initialPokemon,
    enabled: !!query.pokemonName,
  });

  return (
    <main className="p-6">
      <div className="border-b pb-3 mb-3 font-semibold">{query.pokemonName}</div>
      {(() => {
        if (queryPokemon.isIdle || queryPokemon.isLoading) {
          return (
            <div>Loading...</div>
          );
        }
        if (queryPokemon.data) {
          return (
            <pre className="border p-3 rounded bg-gray-100 overflow-x-auto text-xs">
              {JSON.stringify(queryPokemon.data, null, 2)}
            </pre>
          );
        }
        return (
          <div>Error</div>
        );
      })()}
    </main>
  );
}

PokemonDetailPage.propTypes = {
  initialPokemon: PropTypes.object,
};

export async function getStaticPaths() {
  const { pokemons } = await getAllPokemonNames();

  const paths = pokemons.results.map((pokemon) => ({
    params: { pokemonName: pokemon.name },
  }));

  return {
    paths,
    fallback: true,
  };
}

export async function getStaticProps({ params }) {
  return {
    props: {
      initialPokemon: await getPokemon({ queryKey: ['pokemon', params.pokemonName] }),
    },
    revalidate: 10,
  };
}