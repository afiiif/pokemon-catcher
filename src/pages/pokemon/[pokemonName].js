import { useRouter } from 'next/dist/client/router';
import PropTypes from 'prop-types';
import { useQuery } from 'react-query';
import { getAllPokemonNames, getPokemon } from '../../api/pokemon';
import DefaultLayout from '../../components/layout/default-layout';
import Error from '../../components/section/error';
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
  const title = pokemon.status ? capitalizeFirstLetter(pokemon?.name) : 'Pokémon Not Found';

  return (
    <DefaultLayout title={title}>
      <div className="max-w-4xl mx-auto">
        {pokemon.status
          ? (
            <>
              <PokemonDetailTop pokemon={pokemon} />
              <PokemonDetailBottom pokemon={pokemon} />
            </>
          )
          : (
            <Error
              message="Pokémon not found."
              button={{ label: 'Back to Homepage' }}
            />
          )}
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
    fallback: 'blocking',
  };
}

export async function getStaticProps({ params }) {
  return {
    props: {
      initialPokemon: await getPokemon({ queryKey: ['pokemon', params.pokemonName] }),
    },
  };
}
