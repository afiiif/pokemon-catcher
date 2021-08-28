import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { checkIfScrolledToBottom } from '../../utils/window';

export default function InfiniteScroll({
  query, children,
  skeletonOnLoading, skeletonOnFetching,
}) {
  const { isLoading, isFetchingNextPage, fetchNextPage } = query;

  const handleScroll = () => {
    const isScrolledToBottom = checkIfScrolledToBottom();
    if (isScrolledToBottom && !isFetchingNextPage) {
      fetchNextPage();
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (isLoading) {
    return skeletonOnLoading;
  }

  return (
    <>
      {children}
      {isFetchingNextPage && (
        skeletonOnFetching || skeletonOnLoading
      )}
    </>
  );
}

InfiniteScroll.propTypes = {
  query: PropTypes.object,
  children: PropTypes.node,
  skeletonOnLoading: PropTypes.node,
  skeletonOnFetching: PropTypes.node,
};
