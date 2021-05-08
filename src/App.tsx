import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import GlobalStyle from './styles/global';

import AppProvider from './hooks/index';
import PageScope from './components/PageScope';

import Routes from './routes';

const App: React.FC = () => {
  return (
    <>
      <AppProvider>
        <Router>
          <PageScope title="Título">
            <Routes />
          </PageScope>
        </Router>
      </AppProvider>

      <GlobalStyle />
    </>
  );
};

export default App;
