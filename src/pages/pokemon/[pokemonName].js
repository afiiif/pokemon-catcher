import { useRouter } from 'next/dist/client/router';
import PropTypes from 'prop-types';
import { useQuery } from 'react-query';
import { getAllPokemonNames, getPokemon } from '../../api/pokemon';
import DefaultLayout from '../../components/layout/default-layout';
import PokemonDetailBottom from '../../components/section/pokemon-detail/pokemon-detail-bottom';
import PokemonDetailTop from '../../components/section/pokemon-detail/pokemon-detail-top';
import { capitalizeFirstLetter } from '../../utils/string';

export default function PokemonDetailPage({ initialPokemon }) {
  const { query } = useRouter();

  const queryPokemon = useQuery(['pokemon', query.pokemonName], getPokemon, {
    initialData: initialPokemon,
    enabled: !!query.pokemonName,
  });

  const pokemon = queryPokemon.data?.pokemon;

  return (
    <DefaultLayout title={capitalizeFirstLetter(pokemon?.name)}>
      <div className="max-w-4xl mx-auto">
        {(() => {
          if (queryPokemon.isIdle || queryPokemon.isLoading) {
            return (
              <div>Loading...</div>
            );
          }
          if (pokemon) {
            return (
              <>
                <PokemonDetailTop pokemon={pokemon} />
                <PokemonDetailBottom pokemon={pokemon} />
              </>
            );
          }
          return (
            <div>Error</div>
          );
        })()}
      </div>
    </DefaultLayout>
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
  };
}
