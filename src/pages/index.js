import clsx from 'clsx';
import PropTypes from 'prop-types';
import { useInfiniteQuery } from 'react-query';
import { getPokemons } from '../api/pokemon';
import DefaultLayout from '../components/layout/default-layout';
import InfiniteScroll from '../components/layout/infinite-scroll';
import PokemonCardSetting from '../components/section/pokemon-card/pokemon-card-setting';
import PokemonCardSkeleton from '../components/section/pokemon-card/pokemon-card-skeleton';
import PokemonCards from '../components/section/pokemon-card/pokemon-cards';
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
      <PokemonCardSetting
        offset={offset}
        setOffset={setOffset}
        isCompact={isCompact}
        setIsCompact={setIsCompact}
      />
      <div className={clsx('pokemon-card-container', isCompact && 'pokemon-card-container-compact')}>
        <InfiniteScroll
          query={queryPokemons}
          skeletonOnLoading={<PokemonCardSkeleton isCompact={isCompact} />}
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
  };
}
