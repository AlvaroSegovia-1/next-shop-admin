import MainLayout from '@layout/MainLayout';

import '@styles/input.css';

export default function App({ Component, pageProps }) {
  return (
    <>
      <MainLayout>
        <Component {...pageProps} />;
      </MainLayout>
    </>
  );
}
