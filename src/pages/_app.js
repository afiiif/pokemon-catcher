import NextNProgress from 'nextjs-progressbar';
import PropTypes from 'prop-types';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import ModalProvider from '../components/wrapper/modal-context';
import PokemonStorageProvider from '../components/wrapper/pokemon-storage-context';
import '../styles/index.scss';

export default function MyApp({ Component, pageProps }) {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>

      <PokemonStorageProvider>
        <ModalProvider>
          <Component {...pageProps} />
        </ModalProvider>
      </PokemonStorageProvider>

      <ReactQueryDevtools />
      <NextNProgress stopDelayMs={100} />

    </QueryClientProvider>
  );
}

MyApp.propTypes = {
  Component: PropTypes.func,
  pageProps: PropTypes.object,
};
