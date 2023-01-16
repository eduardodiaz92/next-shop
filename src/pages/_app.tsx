import { ProviderAuth } from '../hooks/useAuth';
import '../styles/tailwind.css';
import MainLayout from '../layout/MainLayout';

import type { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <ProviderAuth>
        <MainLayout>
          <Component {...pageProps} />
        </MainLayout>
      </ProviderAuth>
    </>
  );
}
