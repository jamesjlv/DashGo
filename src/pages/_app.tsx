import { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';
import { theme } from '../styles/theme';
import { ReactQueryDevtools } from 'react-query/devtools';
import { SideBarDrawerProvider } from '../contexts/SideBarDrawerContext';
import { makeServer } from '../services/mirage';
import { QueryClientProvider } from 'react-query';
import { queryClient } from '../services/queryClient';

if (process.env.NODE_ENV === 'development') {
  console.log('ATTENTION - Using mirage server');
  makeServer();
}

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <ChakraProvider theme={theme}>
        <SideBarDrawerProvider>
          <Component {...pageProps} />
        </SideBarDrawerProvider>
      </ChakraProvider>
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
}

export default MyApp;
