import clsx from 'clsx';
import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { FaTh, FaThLarge } from 'react-icons/fa';
import { useInfiniteQuery } from 'react-query';
import { getPokemons } from '../api/pokemon';
import DefaultLayout from '../components/layout/default-layout';
import InfiniteScroll from '../components/layout/infinite-scroll';
import PokemonCardSkeleton from '../components/section/pokemon-card/pokemon-card-skeleton';
import PokemonCards from '../components/section/pokemon-card/pokemon-cards';
import { NEXTJS_STATIC_PROPS_REVALIDATE } from '../constants/config';
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

  const [isCompact, setIsCompact] = useState(false);
  useEffect(() => {
    const isScrolledToBottom = checkIfScrolledToBottom();
    if (isScrolledToBottom) {
      queryPokemons.fetchNextPage();
    }
  }, [isCompact]);

  return (
    <DefaultLayout>
      <div className="flex justify-end pb-6 text-rose-500">
        <button
          type="button"
          onClick={() => setIsCompact(false)}
          title="Default"
          className={clsx(
            'p-2.5 text-lg border border-rose-500 rounded-l',
            !isCompact && 'bg-rose-500 text-white',
          )}
        >
          <FaThLarge />
        </button>
        <button
          type="button"
          onClick={() => setIsCompact(true)}
          title="Compact"
          className={clsx(
            'p-2.5 text-lg border border-rose-500 rounded-r -ml-px',
            isCompact && 'bg-rose-500 text-white',
          )}
        >
          <FaTh />
        </button>
      </div>
      <div
        className={clsx(
          'grid',
          isCompact
            ? 'gap-2 grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8'
            : 'gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4',
        )}
      >
        <InfiniteScroll
          query={queryPokemons}
          skeletonOnLoading={<PokemonCardSkeleton isCompact={isCompact} />}
        >
          <PokemonCards pokemons={pokemons} small={isCompact} />
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
    revalidate: NEXTJS_STATIC_PROPS_REVALIDATE,
  };
}
