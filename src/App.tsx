import React from 'react';
import Routes from './components/routes';
import Layout from './components/layout';
import { ThemeProvider } from 'styled-components';
import { defaultTheme } from './utils/theme';
import Modal from './features/modal';

const App = () => {
  return (
    <>
      <ThemeProvider theme={defaultTheme}>
        <Modal />
        <Layout>
          <Routes />
        </Layout>
      </ThemeProvider>
    </>
  );
};

export default App;
