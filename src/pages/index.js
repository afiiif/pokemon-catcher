import Link from 'next/link';
import PropTypes from 'prop-types';
import { useInfiniteQuery } from 'react-query';
import { getPokemons } from '../api/pokemon';
import InfiniteScroll from '../components/layout/infinite-scroll';
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
    <main className="p-6">
      <InfiniteScroll
        query={queryPokemons}
        skeletonOnLoading={<div className="pt-4 pb-20">Loading...</div>}
        skeletonOnFetching={<div className="pt-4 pb-20">Loading More...</div>}
      >
        {pokemons?.map((pokemon) => {
          const href = `/pokemon/${encodeURIComponent(pokemon.name)}`;
          return (
            <Link href={href} key={pokemon.id}>
              <a className="block border p-3 mb-2 bg-gray-100 hover:bg-gray-300">{pokemon.name}</a>
            </Link>
          );
        })}
      </InfiniteScroll>
    </main>
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
