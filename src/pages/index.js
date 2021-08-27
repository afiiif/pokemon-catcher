import PropTypes from 'prop-types';
import { useInfiniteQuery } from 'react-query';
import { getPokemons } from '../api/pokemon';
import DefaultLayout from '../components/layout/default-layout';
import InfiniteScroll from '../components/layout/infinite-scroll';
import PokemonCardSkeleton from '../components/section/pokemon-card-skeleton';
import PokemonCards from '../components/section/pokemon-cards';
import { checkIfScrolledToBottom } from '../utils/window';

export default function HomePage({ initialPokemons }) {
  const queryPokemons = useInfiniteQuery('pokemons', getPokemons, {
    initialData: { pages: [initialPokemons] },
    getNextPageParam: ({ pokemons }) => pokemons?.nextOffset > 0 && pokemons.nextOffset,
    onSuccess: () => {
      const isScrolledToBottom = checkIfScrolledToBottom();
      if (isScrolledToBottom) {
        queryPokemons.fetchNextPage();
      }
    },
  });

  const pokemons = queryPokemons.data?.pages?.flatMap((page) => page.pokemons.results);

  return (
    <DefaultLayout>
      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        <InfiniteScroll
          query={queryPokemons}
          skeletonOnLoading={<PokemonCardSkeleton />}
        >
          <PokemonCards pokemons={pokemons} />
        </InfiniteScroll>
      </div>
    </DefaultLayout>
  );
}

HomePage.propTypes = {
  initialPokemons: PropTypes.object,
};

export async function getStaticProps() {
  return {
    props: {
      initialPokemons: await getPokemons(),
    },
    revalidate: 10,
  };
}
