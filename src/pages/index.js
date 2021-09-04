import clsx from 'clsx';
import PropTypes from 'prop-types';
import { FaTh, FaThLarge } from 'react-icons/fa';
import { useInfiniteQuery } from 'react-query';
import { getPokemons } from '../api/pokemon';
import DefaultLayout from '../components/layout/default-layout';
import InfiniteScroll from '../components/layout/infinite-scroll';
import PokemonCardSkeleton from '../components/section/pokemon-card/pokemon-card-skeleton';
import PokemonCards from '../components/section/pokemon-card/pokemon-cards';
import { NEXTJS_STATIC_PROPS_REVALIDATE } from '../constants/config';
import { POKEMON_GENERATIONS } from '../constants/pokemon';
import usePersistState from '../hooks/use-persist-state';
import { checkIfScrolledToBottom } from '../utils/window';

export default function HomePage({ initialPokemons }) {
  const [offset, setOffset] = usePersistState('setting.offset', 0);

  const queryPokemons = useInfiniteQuery(['pokemons', offset], getPokemons, {
    initialData: { pages: [initialPokemons] },
    getNextPageParam: ({ pokemons }) => pokemons?.nextOffset > 0 && pokemons.nextOffset,
    onSuccess: () => {
      const isScrolledToBottom = checkIfScrolledToBottom();
      if (isScrolledToBottom) queryPokemons.fetchNextPage();
    },
  });

  const pokemons = queryPokemons.data?.pages?.flatMap((page) => page.pokemons.results);

  const [isCompact, setIsCompact] = usePersistState('setting.isCompact', false,
    () => {
      const isScrolledToBottom = checkIfScrolledToBottom();
      if (isScrolledToBottom) queryPokemons.fetchNextPage();
    });

  return (
    <DefaultLayout>
      <div className="flex items-center pb-6 text-rose-500">
        <label htmlFor="pokemon-gen">Jump to:</label>
        <select
          name="pokemon-gen"
          id="pokemon-gen"
          className="border border-rose-500 ml-1.5 px-1.5 py-0.5 rounded"
          onChange={({ target }) => setOffset(Number(target.value))}
          value={offset}
        >
          {POKEMON_GENERATIONS.map((option) => (
            <option key={option.value} value={option.value}>{option.label}</option>
          ))}
        </select>
        <button
          type="button"
          onClick={() => setIsCompact(false)}
          title="Default"
          className={clsx(
            'p-2.5 text-lg border border-rose-500 rounded-l ml-auto',
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
      <div className={clsx('pokemon-card-container', isCompact && 'pokemon-card-container-compact')}>
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
    revalidate: NEXTJS_STATIC_PROPS_REVALIDATE,
  };
}
