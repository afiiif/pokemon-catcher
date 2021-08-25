import PropTypes from 'prop-types';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import PokemonStorageProvider from '../components/wrapper/pokemon-storage-context';
import '../styles/globals.css';

export default function MyApp({ Component, pageProps }) {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <PokemonStorageProvider>
        <Component {...pageProps} />
      </PokemonStorageProvider>
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
}

MyApp.propTypes = {
  Component: PropTypes.func,
  pageProps: PropTypes.object,
};
